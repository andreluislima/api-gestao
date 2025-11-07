package com.api.gestao.dto.login;

public record LoginResponseDTO(
        String mensagem,
        String login,
        String token) {
}
