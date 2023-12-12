package tn.esprit.pieces.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.pieces.Repositorie.PiecesRepo;
import tn.esprit.pieces.entities.Pieces;

import java.util.List;

@Service
public class PiecesServiceImp {
    @Autowired
    private PiecesRepo PIECES_REPO;
    public Pieces addCandidat(Pieces pieces) {
        return PIECES_REPO.save(pieces);
    }
    public Pieces updateCandidat(long id, Pieces newCandidat) {

        if (PIECES_REPO.findById(id).isPresent()) {
            Pieces existingCandidat = PIECES_REPO.findById(id).get();
            existingCandidat.setTitle(newCandidat.getTitle());
            existingCandidat.setDescription(newCandidat.getDescription());
            return PIECES_REPO.save(existingCandidat);
        } else
            return null;
    }
    public String deleteCandidat(long id) {
        if (PIECES_REPO.findById(id).isPresent()) {
            PIECES_REPO.deleteById(id);
            return "candidat supprimé";
        } else
            return "candidat non supprimé";
    }

    public List<Pieces> getall (){return PIECES_REPO.findAll();}


    public Pieces getById(long id) {return PIECES_REPO.findById(id).orElse(null);}
}
