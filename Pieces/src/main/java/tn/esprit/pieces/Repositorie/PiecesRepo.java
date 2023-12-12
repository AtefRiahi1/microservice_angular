package tn.esprit.pieces.Repositorie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.pieces.entities.Pieces;

import java.util.Optional;

@Repository
public interface PiecesRepo extends JpaRepository<Pieces, Long> {
/*
    @Query(
            nativeQuery = true,
            value
                    = "SELECT ea.nom FROM PIECES.pieces ea join CATEGORIE.categorie e on e.id = ea.id where ea.id=:Id")
    Optional<Pieces> findPiecesByEmployeeId(@Param("Id") int employeeId);*/



}
