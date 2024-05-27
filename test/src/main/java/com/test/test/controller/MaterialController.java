package com.test.test.controller;

import com.test.test.model.Material;
import com.test.test.service.MaterialService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/material")
public class MaterialController {

    private final MaterialService materialService;
    public MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }

    @GetMapping
    public ResponseEntity<List<Material>> findAll() {
        return ResponseEntity.ok(materialService.getAllMaterials());
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<Material> findById(@PathVariable String id) {
        return ResponseEntity.ok(materialService.getById(id));
    }
    @GetMapping("/name/{name}")
    public ResponseEntity<Material> findByName(@PathVariable String name) {
        return ResponseEntity.ok(materialService.getMaterialByName(name));
    }
    @GetMapping("/type/{type}")
    public ResponseEntity<List<Material>> findByType(@PathVariable String type) {
        return ResponseEntity.ok(materialService.getMaterialByType(type));
    }

    @PutMapping
    public ResponseEntity<Material> update(@RequestBody Material material) {
        materialService.updateMaterial(material);
        return ResponseEntity.ok().build();
    }

    @PostMapping
    public ResponseEntity<Material> create(@RequestBody Material material) {
        materialService.createMaterial(material);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping
    public ResponseEntity<Material> delete(@RequestBody Material material) {
        materialService.deleteMaterial(material);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
