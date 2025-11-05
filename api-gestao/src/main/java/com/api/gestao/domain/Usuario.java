package com.api.gestao.domain;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name="usuario")
@SequenceGenerator(name="user_id_seq", sequenceName ="user_id_seq", initialValue = 1, allocationSize = 1)
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_id_seq")
    @Column(name="id")
    private Long id;

    @Column(name="login")
    private String login;

    @Column(name="senha")
    private String senha;

    @Column(name="data_criacao")
    private LocalDate dataCriacao;

    @Column(name="status")
    private Boolean status;

    @ManyToOne
    @JoinColumn(name="perfil_acesso_id")
    private PerfilAcesso perfilAcesso;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public PerfilAcesso getPerfilAcesso() {
        return perfilAcesso;
    }

    public void setPerfilAcesso(PerfilAcesso perfilAcesso) {
        this.perfilAcesso = perfilAcesso;
    }
}
