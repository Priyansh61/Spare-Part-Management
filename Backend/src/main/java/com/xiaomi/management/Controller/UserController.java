package com.xiaomi.management.Controller;


import com.xiaomi.management.Services.UserService;
import lombok.AllArgsConstructor;
import com.xiaomi.management.Entity.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/user")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @GetMapping("/greet")
    public ResponseEntity<String> greet() {
        return ResponseEntity.ok("hello guys") ;
    }


    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody User request ) {
        return userService.register(request);
    }

}
