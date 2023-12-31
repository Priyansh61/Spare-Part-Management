//package com.xiaomi.management.Security.config;
//
//import com.xiaomi.management.Security.JwtService;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.NonNull;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//
//@Component
//@RequiredArgsConstructor
//public class JWTAuthenticationFilter extends OncePerRequestFilter {
//
//    private final JwtService jwtService;
//    private final UserDetailsService userDetailsService ;
//    @Override
//    protected void doFilterInternal(
//            @NonNull  HttpServletRequest request,
//            @NonNull  HttpServletResponse response,
//            @NonNull  FilterChain filterChain
//    ) throws ServletException, IOException {
//        final String authorizationHeader = request.getHeader("Authorization");
//        String jwt =null;
//        String username = null
//                ;
//
//        if (authorizationHeader != null && authorizationHeader.startsWith(("Bearer "))) {
//            jwt = authorizationHeader.substring(7);
//            username = jwtService.extractUsername(jwt);
//        }
//
//        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
//
//            if (jwtService.isTokenValid(jwt, userDetails)) {
//                UsernamePasswordAuthenticationToken authToken =
//                        new UsernamePasswordAuthenticationToken(
//                                userDetails,
//                                null,
//                                userDetails.getAuthorities()
//                        );
//
//                authToken.setDetails(
//                        new WebAuthenticationDetailsSource().buildDetails(request)
//                );
//
//                SecurityContextHolder.getContext().setAuthentication(authToken);
//            }
//        }
//
//
//
//
//    }
//}
