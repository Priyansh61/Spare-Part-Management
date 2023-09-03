package Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import Entity.user;

import java.util.Optional;

public interface UserRepository extends JpaRepository<user,Integer> {

    Optional<user> findByUsername(String username);

}
