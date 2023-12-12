package com.example.motos.moto.Controller;
import com.example.motos.moto.Entiter.Moto;
import com.example.motos.moto.Repository.MotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/motos")
@CrossOrigin("*")
public class MotoController {
    private final MotoRepository motoRepository;

    @Autowired
    public MotoController(MotoRepository motoRepository) {
        this.motoRepository = motoRepository;
    }

    @GetMapping
    public List<Moto> getAllMotos() {
        return motoRepository.findAll();
    }

    @PostMapping
    public Moto createMoto(@RequestBody Moto moto) {
        return motoRepository.save(moto);
    }

    @GetMapping("/{id}")
    public Moto getMotoById(@PathVariable String id) {
        return motoRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Moto updateMoto(@PathVariable String id, @RequestBody Moto motoDetails) {
        Moto moto = motoRepository.findById(id).orElse(null);
        if (moto != null) {
            moto.setMarque(motoDetails.getMarque());
            moto.setModele(motoDetails.getModele());
            moto.setAnneeFabrication(motoDetails.getAnneeFabrication());
            moto.setPrix(motoDetails.getPrix());
            moto.setImage(motoDetails.getImage());
            return motoRepository.save(moto);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteMoto(@PathVariable String id) {
        motoRepository.deleteById(id);
    }
}
