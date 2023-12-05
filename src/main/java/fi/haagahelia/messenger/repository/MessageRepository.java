package fi.haagahelia.messenger.repository;

import org.springframework.stereotype.Repository;

import fi.haagahelia.messenger.model.Message;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
}
