package br.ufrn.imd.api.repository;

import br.ufrn.imd.api.modelos.Usuario;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends PagingAndSortingRepository<Usuario, Long> {
}
