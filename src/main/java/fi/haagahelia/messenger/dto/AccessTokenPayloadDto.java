package fi.haagahelia.messenger.dto;

import java.time.Instant;

public record AccessTokenPayloadDto(String accessToken, Instant expiresAt) {
}
