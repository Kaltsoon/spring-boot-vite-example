package fi.haagahelia.messenger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import fi.haagahelia.messenger.dto.CreateMessageDto;
import fi.haagahelia.messenger.model.Message;
import fi.haagahelia.messenger.model.User;
import fi.haagahelia.messenger.repository.MessageRepository;
import fi.haagahelia.messenger.service.UserService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
public class MessageRestController {
	@Autowired
	private MessageRepository messageRepository;

	@Autowired
	private UserService userService;

	@GetMapping("")
	public List<Message> getAllMessages() {
		return messageRepository.findAll();
	}

	@GetMapping("/{id}")
	public Message getMessageById(@PathVariable Long id) {
		return messageRepository.findById(id).orElseThrow(
				() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Message with id " + id + " does not exist"));
	}

	@PostMapping("")
	public Message createMessage(@Valid @RequestBody CreateMessageDto message, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
					bindingResult.getAllErrors().get(0).getDefaultMessage());
		}

		User user = userService.getAuthenticatedUser()
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authentication is required"));

		Message newMessage = new Message(message.getContent(), user);
		return messageRepository.save(newMessage);
	}
}
