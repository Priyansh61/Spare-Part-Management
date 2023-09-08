//package com.xiaomi.management.Services;
//
//
//import com.xiaomi.management.Repository.UserRepository;
//import com.xiaomi.management.Security.JwtService;
//import com.xiaomi.management.enums.AuthenticationRequest;
//import com.xiaomi.management.enums.AuthenticationResponse;
//import com.xiaomi.management.enums.RegisterRequest;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import com.xiaomi.management.Entity.user;
//
//@Service
//@RequiredArgsConstructor
//
//public class AuthenticationService {
//
//    private final UserRepository repository;
//    private final PasswordEncoder passwordEncoder;
//
//    private final JwtService jwtService;
//
//    private final AuthenticationManager authenticationManager;
//
//    public AuthenticationResponse register (RegisterRequest request) {
//        user user = new user(
//                request.getName(),
//                request.getUsername(),
//                request.getEmail(),
//                passwordEncoder.encode(request.getPassword()),
//                request.getUserRole(),
//                request.getEnabled()
//        );
//
//        repository.save(user);
//
//        var jwtToken = jwtService.generateToken(user) ;
//        return AuthenticationResponse.builder()
//                .token(jwtToken)
//                .build();
//    }
//
//    public AuthenticationResponse authenticate (AuthenticationRequest request) {
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        request.getUsername(),
//                        request.getPassword()
//                )
//        );
//
//        var user = repository.findByUsername(request.getUsername())
//                .orElseThrow(() -> new RuntimeException("User not found"));
//
//        var jwtToken = jwtService.generateToken(user) ;
//
//        return AuthenticationResponse.builder()
//                .token(jwtToken)
//                .build();
//    }
//}
