package com.api.gestao.service;

import com.api.gestao.domain.Despesa;
import com.api.gestao.dto.despesa.DespesaRequestDTO;

import java.util.List;

public interface DespesaServiceInterface {
public Despesa criarDespesa(DespesaRequestDTO dto);
public Despesa editarDespesa(Long id, DespesaRequestDTO dto);
public Despesa removerDespesa(Long id);
public List<Despesa> listarDespesas();

}
