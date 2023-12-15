package fi.haagahelia.messenger.dto;

import java.time.Instant;

public class AccessTokenPayloadDto {
    private String accessToken;
    private Instant expiresAt;

    public AccessTokenPayloadDto(String accessToken, Instant expiresAt) {
        this.accessToken = accessToken;
        this.expiresAt = expiresAt;
    }

    public AccessTokenPayloadDto() {
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public Instant getExpiresAt() {
        return expiresAt;
    }

    public void setExpiresAt(Instant expiresAt) {
        this.expiresAt = expiresAt;
    }
}
