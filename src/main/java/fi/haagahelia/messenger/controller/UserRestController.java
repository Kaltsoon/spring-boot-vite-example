package fi.haagahelia.messenger.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import fi.haagahelia.messenger.dto.RegisterUserDto;
import fi.haagahelia.messenger.model.User;
import fi.haagahelia.messenger.repository.UserRepository;
import fi.haagahelia.messenger.service.UserService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserRestController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping("")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("")
    public User createUser(@Valid @RequestBody RegisterUserDto registration, BindingResult bindingResult) {
        Optional<User> existingUser = userRepository.findOneByUsername(registration.getUsername());

        if (existingUser.isPresent()) {
            bindingResult.rejectValue("username", "UsernameTaken",
                    "This username is already taken. Choose another one");
        }

        if (bindingResult.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    bindingResult.getAllErrors().get(0).getDefaultMessage());
        }

        return userService.registerUser(registration);
    }

    @GetMapping("/current")
    public User getCurrentUser() {
        return userService.getAuthenticatedUser()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authentication is required"));
    }
}
