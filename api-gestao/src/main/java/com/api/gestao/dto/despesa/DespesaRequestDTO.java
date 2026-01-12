package com.api.gestao.dto.despesa;

import java.math.BigDecimal;
import java.time.LocalDate;

public record DespesaRequestDTO(
        LocalDate data,
        String descricao,
        String empresa,
        String formaPagamento,
        BigDecimal valor

) {
}
