package com.xiaomi.management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.xiaomi.management.Entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Integer> {

    Optional<User> findByUsername(String username);

}