package com.api.gestao.controller;

import com.api.gestao.domain.Usuario;
import com.api.gestao.dto.login.LoginRequestDTO;
import com.api.gestao.dto.login.LoginResponseDTO;
import com.api.gestao.repository.UsuarioRepository;
import com.api.gestao.security.TokenService;
import com.api.gestao.service.UsuarioServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO dto){
        Usuario user = usuarioRepository.findByLogin(dto.login()).orElseThrow(
                ()-> new RuntimeException("Usuário não encontrado.")
        );
        if(!passwordEncoder.matches(dto.senha(), user.getSenha())){
            throw new RuntimeException("Login ou Senha incorretos.");
        }
        String token = tokenService.generateToken(user);
        return ResponseEntity.ok(new LoginResponseDTO(
                "Acesso autorizado!",
                dto.login(),
                token
        ));

    }

}
