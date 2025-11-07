package com.api.gestao.service;

import com.api.gestao.domain.PerfilAcesso;
import com.api.gestao.domain.Usuario;
import com.api.gestao.dto.usuario.UsuarioRequestDTO;
import com.api.gestao.repository.PerfilRepository;
import com.api.gestao.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServiceImp implements UsuarioServiceInterface{

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private PerfilRepository perfilRepository;

    @Override
    public Usuario criarUsuario(UsuarioRequestDTO dto) {
        if(usuarioRepository.findByLogin(dto.login()).isPresent()){
            throw new RuntimeException(dto.login() + "Login já cadastrado");
        }

        PerfilAcesso perfil = perfilRepository.findById(dto.perfilAcessoId()).orElseThrow(
                ()-> new RuntimeException("Perfil não encontrado.")
        );

        Usuario user = new Usuario();
        user.setLogin(dto.login());
        user.setSenha(passwordEncoder.encode(dto.senha()));
        user.setPerfilAcesso(perfil);

        return usuarioRepository.save(user);
    }

    @Override
    public Usuario editarUsuario(Long id, UsuarioRequestDTO dto) {
        Usuario user = usuarioRepository.findById(id).orElseThrow(
                ()-> new RuntimeException("Usuário não encontrado.")
        );
        user.setLogin(dto.login());
        return usuarioRepository.save(user);
    }

    @Override
    public Usuario removerUsuario(Long id) {
        Usuario user = usuarioRepository.findById(id).orElseThrow(
                ()-> new RuntimeException("Usuário não encontrado.")
        );
        usuarioRepository.delete(user);
        return user;
    }

    @Override
    public List<Usuario> listarUsuarios() {
        List<Usuario>lista = usuarioRepository.findAll();
        if(lista.isEmpty()){
            throw new RuntimeException("Não há usuários cadastrados");
        }
        return lista;
    }
}
