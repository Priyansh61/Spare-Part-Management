package com.xiaomi.management.Controller;


//import com.xiaomi.management.Services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/user")
@AllArgsConstructor
public class UserController {

//    private UserService userService;

    @GetMapping("/greet")
    public ResponseEntity<String> greet() {
        return ResponseEntity.ok("hello guys") ;
    }
//    public String register(@RequestBody user request ) {
//        return userService.register(request);
//    }

}
