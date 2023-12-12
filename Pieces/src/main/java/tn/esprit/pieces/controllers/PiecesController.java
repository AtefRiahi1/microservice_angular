package tn.esprit.pieces.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.pieces.Services.PiecesServiceImp;
import tn.esprit.pieces.entities.Pieces;

import java.util.List;

@RestController
@RequestMapping(value = "/piece")
@CrossOrigin("*")
public class PiecesController {

    @Autowired
    private PiecesServiceImp piecesService;

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Pieces> createCandidat(@RequestBody Pieces pieces) {
        return new ResponseEntity<>(piecesService.addCandidat(pieces), HttpStatus.OK);
    }

    @GetMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public List<Pieces> getall() {
        return piecesService.getall();
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Pieces> updateCandidat(@PathVariable(value = "id") int id, @RequestBody Pieces pieces) {
        return new ResponseEntity<>(piecesService.updateCandidat(id, pieces),
                HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Pieces getById(@PathVariable (value = "id") long id) {
        return piecesService.getById(id);
    }



    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<String> deleteCandidat(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(piecesService.deleteCandidat(id), HttpStatus.OK);
    }
}
