package com.api.gestao.dto.usuario;

import com.api.gestao.domain.PerfilAcesso;

public record UsuarioRequestDTO(
        String login,
        String senha,
        Long perfilAcessoId
) {
}
