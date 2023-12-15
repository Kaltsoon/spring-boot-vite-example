package fi.haagahelia.messenger.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import fi.haagahelia.messenger.dto.LoginUserDto;
import fi.haagahelia.messenger.service.JwtService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthRestController {
    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginUserDto login, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    bindingResult.getAllErrors().get(0).getDefaultMessage());
        }

        UsernamePasswordAuthenticationToken credentials = new UsernamePasswordAuthenticationToken(login.getUsername(),
                login.getPassword());

        try {
            Authentication auth = authenticationManager.authenticate(credentials);
            String jwts = jwtService.getToken(auth.getName());

            return ResponseEntity.ok().header(HttpHeaders.AUTHORIZATION, "Bearer " + jwts)
                    .header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, "Authorization").build();
        } catch (Exception exception) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Invalid username or password");
        }

    }
}
