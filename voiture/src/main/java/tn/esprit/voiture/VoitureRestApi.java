package tn.esprit.voiture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.security.RolesAllowed;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import static java.nio.file.Files.copy;
import static java.nio.file.Paths.get;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

@RestController
@RequestMapping(value = "voiture")
@CrossOrigin("*")
public class VoitureRestApi {
    @Autowired
    private VoitureService voitureService;

    public static final String DIRECTORY = "/app/uploads/";

    @PostMapping
    //@RolesAllowed("admin")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Voiture> createVoiture(@RequestBody Voiture voiture) {
        return new ResponseEntity<>(voitureService.addVoiture(voiture), HttpStatus.OK);
    }

    @GetMapping
    public List<Voiture> getAll() {
        return voitureService.getAll();
    }

    @GetMapping(value = "/detail/{id}")
    //@RolesAllowed("user")
    public Voiture detailVoiture(@PathVariable(value = "id") String id){
        return voitureService.getdetail(id);
    }

    @PutMapping(value = "/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    //@RolesAllowed("admin")
    public ResponseEntity<Voiture> updateVoiture(@PathVariable(value = "id") String id,
                                                   @RequestBody Voiture voiture){
        return new ResponseEntity<>(voitureService.updateVoiture(id, voiture),
                HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    //@RolesAllowed("admin")
    public void deleteVoiture(@PathVariable(value = "id") String id){
            voitureService.deleteVoiture(id);
    }

    @PostMapping(value="/upload")
    //@RolesAllowed("admin")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile multipartFile) throws IOException {
        String filename= StringUtils.cleanPath(multipartFile.getOriginalFilename());
        Path fileStorage=get(DIRECTORY,filename).toAbsolutePath().normalize();
        copy(multipartFile.getInputStream(),fileStorage,REPLACE_EXISTING);
        return ResponseEntity.ok().body(filename);
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> serveImage(@PathVariable String fileName) {
        Path imagePath = Paths.get(DIRECTORY, fileName);

        try {
            Resource resource = new UrlResource(imagePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(resource);
            }
        } catch (IOException e) {

        }

        return ResponseEntity.notFound().build();
    }
}
