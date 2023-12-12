package tn.esprit.vetements;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("vetements")
@RequiredArgsConstructor
@CrossOrigin("*")
public class VetementController {
    private final VetementService vetementService;

    @PostMapping
    public Vetement createVetement(@RequestBody Vetement vetement) {
        return vetementService.addVetement(vetement);
    }
    @PutMapping
    public Vetement updateVetement(@RequestBody Vetement vetement) {
        return vetementService.updateVetement(vetement);
    }
    @GetMapping
    public List<Vetement> getAllVetements() {
        return vetementService.getAllVetements();
    }

    @GetMapping("/{idV}")
    public Vetement getVetementById(@PathVariable long idV) {
        return vetementService.getVetementById(idV);
    }

    @DeleteMapping( "/{idV}")
    public void deleteVetement(@PathVariable long idV){
        vetementService.deleteVetement(idV);
    }
}
