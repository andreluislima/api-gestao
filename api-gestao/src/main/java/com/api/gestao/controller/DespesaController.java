package com.api.gestao.controller;

import com.api.gestao.domain.Despesa;
import com.api.gestao.dto.despesa.DespesaRequestDTO;
import com.api.gestao.dto.despesa.DespesaResponseDTO;
import com.api.gestao.repository.DespesaRepository;
import com.api.gestao.service.DespesaServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/despesa")
public class DespesaController {

    @Autowired
    DespesaRepository despesaRepository;

    @Autowired
    DespesaServiceInterface despesaServiceInterface;

    @PostMapping("/criarDespesa")
    public ResponseEntity<?> criarDespesa(@RequestBody DespesaRequestDTO dto){
        Despesa despesa = despesaServiceInterface.criarDespesa(dto);
        despesaRepository.save(despesa);

        return ResponseEntity.ok(new DespesaResponseDTO(
            "Despesa criada com sucesso!",
                despesa.getId(),
                despesa.getData(),
                despesa.getDescricao(),
                despesa.getEmpresa(),
                despesa.getFormaPagamento(),
                despesa.getValor()
        ));
    }

    @GetMapping("/despesas")
    public ResponseEntity<List<Despesa>>listarDepesas(){
        List<Despesa> despesas = despesaServiceInterface.listarDespesas();
        return ResponseEntity.ok(despesas);
    }





}
