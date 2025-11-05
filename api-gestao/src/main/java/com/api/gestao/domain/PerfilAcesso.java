package com.api.gestao.domain;

import jakarta.persistence.*;

@Entity
@Table(name="perfil_acesso")
@SequenceGenerator(name="acesso_id_seq", sequenceName ="acesso_id_seq", initialValue = 1, allocationSize = 1)
public class PerfilAcesso {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "acesso_id_seq")
    @Column(name="id")
    private Long id;

    @Column(name="nome")
    private String nome;

    @Column(name="descricao")
    private String descricao;

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
