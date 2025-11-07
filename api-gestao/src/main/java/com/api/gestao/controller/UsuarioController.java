package com.api.gestao.controller;

import com.api.gestao.domain.Usuario;
import com.api.gestao.dto.usuario.UsuarioRequestDTO;
import com.api.gestao.dto.usuario.UsuarioResponseDTO;
import com.api.gestao.dto.usuario.UsuarioResponseEditadoDTO;
import com.api.gestao.repository.UsuarioRepository;
import com.api.gestao.security.TokenService;
import com.api.gestao.service.UsuarioServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioServiceInterface usuarioServiceInterface;
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/criarUsuario")
    public ResponseEntity<?> criarUsuario(@RequestBody UsuarioRequestDTO dto){
        Optional<Usuario> user = usuarioRepository.findByLogin(dto.login());
        if(user.isPresent()){
            return ResponseEntity.badRequest().body("Usuário já cadastrado");
        }
        Usuario usuario = usuarioServiceInterface.criarUsuario(dto);
        usuarioRepository.save(usuario);

        String token = tokenService.generateToken(usuario);
        return ResponseEntity.ok(new UsuarioResponseDTO(
           "Usuário criado com sucesso!",
                usuario.getLogin(),
                usuario.getDataCriacao(),
                token
        ));
    }

    @PutMapping("editar/{id}")
    public ResponseEntity<UsuarioResponseEditadoDTO>editarUsuario(@PathVariable Long id, UsuarioRequestDTO dto){
        Usuario usuarioAtualizado = usuarioServiceInterface.editarUsuario(id, dto);
        return ResponseEntity.ok(new UsuarioResponseEditadoDTO(
                "Usuário editado com sucesso!",
                usuarioAtualizado.getId(),
                usuarioAtualizado.getLogin()
        ));
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<UsuarioResponseEditadoDTO>deletarUsuario(@PathVariable Long id){
        Usuario usuarioDeletado = usuarioServiceInterface.removerUsuario(id);
        return ResponseEntity.ok(new UsuarioResponseEditadoDTO(
                "Usuário removido com sucesso!",
                usuarioDeletado.getId(),
                usuarioDeletado.getLogin()
        ));
    }

    @GetMapping("/usuarios")
    public ResponseEntity<List<Usuario>>listarUsuarios(){
        List<Usuario>usuarios = usuarioServiceInterface.listarUsuarios();
        return ResponseEntity.ok(usuarios);
    }
}
