package com.xiaomi.management.Services;

import com.xiaomi.management.Entity.User;
import com.xiaomi.management.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User with username " + username + " not found"));
    }


    public ResponseEntity<Object> register(User request) {
        if (request.getUsername() == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Username not Present.");
        }

        if (request.getPassword() == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Password not Present.");
        }

        if (request.getName() == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Name not Present.");
        }

        if (request.getEmail() == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Email not Present.");
        }

        User userFromDB = userRepository.findByUsername(request.getUsername()).orElse(null);

        if (userFromDB != null) {
            throw new IllegalStateException("User with username " + request.getUsername() + " already exists");
        }

        userRepository.save(request);

        return ResponseEntity.ok("User with username " + request.getUsername() + " successfully registered");

    }
}
