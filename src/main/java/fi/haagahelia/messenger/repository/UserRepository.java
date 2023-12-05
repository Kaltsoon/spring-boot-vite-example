package fi.haagahelia.messenger.repository;

import org.springframework.stereotype.Repository;

import fi.haagahelia.messenger.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByUsername(String username);
}
