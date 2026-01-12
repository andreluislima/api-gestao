package com.api.gestao.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity 
@Table(name="despesa")
@SequenceGenerator(name="despesa_id_seq", sequenceName = "despesa_id_seq", initialValue = 1, allocationSize = 1)
public class Despesa {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "despesa_id_seq" )
	@Column(name="id")
	private long id;
	
	@Column(name="data")
	private LocalDate data;
	
	@Column(name="descricao")
	private String descricao;
	
	@Column(name="empresa")
	private String empresa;
	
	@Column(name="formaPagamento")
	private String formaPagamento;
	
	@Column(name="valor")
	private BigDecimal valor;
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getEmpresa() {
		return empresa;
	}

	public void setEmpresa(String empresa) {
		this.empresa = empresa;
	}

	public String getFormaPagamento() {
		return formaPagamento;
	}

	public void setFormaPagamento(String formaPagamento) {
		this.formaPagamento = formaPagamento;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public void setValor(BigDecimal valor) {
		this.valor = valor;
	}
	
	
}
