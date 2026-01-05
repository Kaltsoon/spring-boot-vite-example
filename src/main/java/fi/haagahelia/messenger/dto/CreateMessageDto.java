package fi.haagahelia.messenger.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateMessageDto(@NotBlank(message = "Content is required") String content) {
}
