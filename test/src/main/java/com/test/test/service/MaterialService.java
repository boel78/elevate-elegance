package com.test.test.service;

import com.test.test.model.Material;
import com.test.test.repository.MaterialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialService {

    private final MaterialRepository materialRepository;
    public MaterialService(MaterialRepository materialRepository) {
        this.materialRepository = materialRepository;
    }

    public Material getMaterialByName(String name) {
        return materialRepository.findByName(name);
    }
    public List<Material> getAllMaterials() {
        return materialRepository.findAll();
    }
    public List<Material> getMaterialByType(String type) {
        return materialRepository.findByType(type);
    }
    public Material getById(String id) {
        return materialRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Material not found"));
    }

    public Material createMaterial(Material material) {
        return materialRepository.save(material);
    }

    public Material updateMaterial(Material material) {
        Material oldMaterial = materialRepository.findById(material.getId())
                .orElseThrow(()-> new RuntimeException("Material not found"));
        oldMaterial.setName(material.getName());
        oldMaterial.setDescription(material.getDescription());
        oldMaterial.setType(material.getType());
        return materialRepository.save(oldMaterial);
    }

    public void deleteMaterial(Material material) {
        materialRepository.delete(material);
    }
}
