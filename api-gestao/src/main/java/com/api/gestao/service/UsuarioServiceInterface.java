package com.api.gestao.service;

import com.api.gestao.domain.Usuario;
import com.api.gestao.dto.usuario.UsuarioRequestDTO;

import java.util.List;

public interface UsuarioServiceInterface {

    public Usuario criarUsuario(UsuarioRequestDTO dto);
    public Usuario editarUsuario(Long id, UsuarioRequestDTO dto);
    public Usuario removerUsuario(Long id);
    public List<Usuario>listarUsuarios();
}
