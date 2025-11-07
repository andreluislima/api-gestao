package com.api.gestao.dto.usuario;

public record UsuarioResponseDTO(
        String mensagem,
        String login,
        java.time.LocalDateTime dataCriacao,
        String token

) {
}
