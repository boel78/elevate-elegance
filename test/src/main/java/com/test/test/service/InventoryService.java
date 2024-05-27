package com.test.test.service;

import com.test.test.model.Inventory;
import com.test.test.repository.InventoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryService {

    private InventoryRepository inventoryRepository;
    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    public Inventory createInventory(Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    public List<Inventory> getAllInventory() {
        return inventoryRepository.findAll();
    }

    public Inventory getInventoryById(String id) {
        return inventoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Inventory not found"));
    }

    public Inventory getInventoryByProductId(String productId) {
        return inventoryRepository.findByProductid(productId);
    }

    public Inventory updateInventory(Inventory inventory) {
        Inventory foundObject = inventoryRepository.findByProductid(inventory.getId());
        foundObject.setQuantity(inventory.getQuantity());
        return inventoryRepository.save(foundObject);
    }

    public void deleteInventory(String id) {
        inventoryRepository.deleteById(id);
    }
}
