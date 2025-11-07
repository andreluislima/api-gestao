package com.api.gestao.repository;

import com.api.gestao.domain.PerfilAcesso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerfilRepository extends JpaRepository<PerfilAcesso,Long> {

}
