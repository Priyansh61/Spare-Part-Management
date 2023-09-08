//package com.xiaomi.management.Security.config;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import com.xiaomi.management.Repository.UserRepository;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@Configuration
//@RequiredArgsConstructor
//public class ApplicationConfig {
//
//    private final UserRepository repository;
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        return username -> repository.findByUsername(username)
//                .map(UserDetails.class::cast)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//    }
//
//    @Bean
//    public AuthenticationProvider authenticationProvider() {
//       DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
//         provider.setUserDetailsService(userDetailsService());
//         provider.setPasswordEncoder(passWordEncoder());
//         return provider;
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager (AuthenticationConfiguration config) throws Exception {
//        return config.getAuthenticationManager();
//    }
//
//    @Bean
//    public PasswordEncoder passWordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//}
