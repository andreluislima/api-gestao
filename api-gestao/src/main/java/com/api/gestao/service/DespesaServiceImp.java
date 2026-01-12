package com.api.gestao.service;

import com.api.gestao.domain.Despesa;
import com.api.gestao.dto.despesa.DespesaRequestDTO;
import com.api.gestao.repository.DespesaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DespesaServiceImp implements DespesaServiceInterface {

    @Autowired
    DespesaRepository despesaRepository;

    @Override
    public Despesa criarDespesa(DespesaRequestDTO dto) {
        Despesa despesa = new Despesa();
        despesa.setData(dto.data());
        despesa.setDescricao(dto.descricao());
        despesa.setEmpresa(dto.empresa());
        despesa.setFormaPagamento(dto.formaPagamento());
        despesa.setValor(dto.valor());

        return despesaRepository.save(despesa);
    }

    @Override
    public Despesa editarDespesa(Long id, DespesaRequestDTO dto) {
        Despesa despesa = despesaRepository.findDespesaById(id).orElseThrow(
                ()-> new RuntimeException("Despesa não encontrada")
        );
        despesa.setData(dto.data());
        despesa.setDescricao(dto.descricao());
        despesa.setEmpresa(dto.empresa());
        despesa.setFormaPagamento(dto.formaPagamento());
        despesa.setValor(dto.valor());

        return despesaRepository.save(despesa);
    }

    @Override
    public Despesa removerDespesa(Long id) {
        Despesa despesa = despesaRepository.findDespesaById(id).orElseThrow(
                ()-> new RuntimeException("Despesa não encontrada")
        );
        despesaRepository.delete(despesa);
        return despesa;
    }

    @Override
    public List<Despesa> listarDespesas() {
        List<Despesa> lista = despesaRepository.findAll();
        if(lista.isEmpty()){
            throw new RuntimeException("Não há despesas cadastradas");
        }
        return lista;
    }
}
