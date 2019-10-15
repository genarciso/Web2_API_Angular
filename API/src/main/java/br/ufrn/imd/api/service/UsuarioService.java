package br.ufrn.imd.api.service;

import br.ufrn.imd.api.modelos.Usuario;
import br.ufrn.imd.api.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public List<Usuario> findAll() {
        return (List<Usuario>) usuarioRepository.findAll();
    }

    public Optional<Usuario> findById(Long id) {
        return usuarioRepository.findById(id);
    }

    public Usuario save(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario update(Long id, Usuario usuario) {
        Optional<Usuario> usuarioFind = usuarioRepository.findById(id);


        usuario.setId(id);
        if (usuario.getNome() == null){
            usuario.setNome(usuarioFind.get().getNome());
        }

        if (!usuarioFind.get().getLogin().equals(usuario.getLogin())){
            if (usuario.getLogin() == null){
                usuario.setLogin(usuarioFind.get().getLogin());
            }
        }

        if (!usuarioFind.get().getEmail().equals(usuario.getEmail())){
            if (usuario.getEmail() == null){
                usuario.setEmail(usuarioFind.get().getEmail());
            }
        }

        if (!usuarioFind.get().getSenha().equals(usuario.getSenha())){
            if (usuario.getSenha() == null){
                usuario.setSenha(usuarioFind.get().getSenha());
            }
        }

        return usuarioRepository.save(usuario);
    }

    public void delete(Long id) {
        usuarioRepository.deleteById(id);
    }

}
