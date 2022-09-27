package com.libreria.biblioteca.repository;

import com.libreria.biblioteca.models.Lendings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LendingsRepository extends JpaRepository<Lendings, Long> {
}
