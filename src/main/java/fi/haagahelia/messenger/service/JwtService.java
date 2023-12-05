package fi.haagahelia.messenger.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.Duration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Date;

@Service
public class JwtService {
	private final long EXPIRATION_TIME = Duration.ofHours(6).toMillis();
	private final String PREFIX = "Bearer ";

	@Value("${auth.jwt-secret}")
	private String JWT_SECRET;

	private Key getSigningKey() {
		byte[] keyBytes = JWT_SECRET.getBytes(StandardCharsets.UTF_8);
		return Keys.hmacShaKeyFor(keyBytes);
	}

	public String getToken(String username) {
		String token = Jwts.builder().setSubject(username)
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)).signWith(getSigningKey())
				.compact();

		return token;
	}

	public String getAuthUser(HttpServletRequest request) {
		String token = request.getHeader(HttpHeaders.AUTHORIZATION);

		if (token == null) {
			return null;
		}

		String user = Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token.replace(PREFIX, ""))
				.getBody().getSubject();

		return user;
	}
}
