package fi.haagahelia.messenger.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fi.haagahelia.messenger.dto.RegisterUserDto;
import fi.haagahelia.messenger.model.User;
import fi.haagahelia.messenger.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<User> getAuthenticatedUser() {
        UsernamePasswordAuthenticationToken authentication = (UsernamePasswordAuthenticationToken) SecurityContextHolder
                .getContext().getAuthentication();

        if (authentication == null) {
            return Optional.empty();
        }

        return userRepository.findOneByUsername(authentication.getPrincipal().toString());
    }

    public User registerUser(RegisterUserDto registration) {
        String passwordHash = passwordEncoder.encode(registration.getPassword());
        User newUser = new User(registration.getUsername(), passwordHash, "USER");

        return userRepository.save(newUser);
    }
}
