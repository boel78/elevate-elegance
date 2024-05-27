package com.test.test.controller;

import com.test.test.model.Inventory;
import com.test.test.service.InventoryService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class InventoryController {

    private InventoryService inventoryService;
    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @GetMapping
    public ResponseEntity<List<Inventory>> getInventory() {
        return ResponseEntity.ok(inventoryService.getAllInventory());
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<Inventory> getInventoryById(@PathVariable String id) {
        return ResponseEntity.ok(inventoryService.getInventoryById(id));
    }
    @GetMapping("/productid/{id}")
    public ResponseEntity<Inventory> getInventoryByProductId(@PathVariable String id) {
        return ResponseEntity.ok(inventoryService.getInventoryByProductId(id));
    }

    @PostMapping
    public ResponseEntity<Inventory> createInventory(@RequestBody Inventory inventory) {
        inventoryService.createInventory(inventory);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping
    public ResponseEntity<Inventory> updateInventory(@RequestBody Inventory inventory) {
        inventoryService.updateInventory(inventory);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    public ResponseEntity<Inventory> deleteInventory(@RequestBody Inventory inventory) {
        inventoryService.deleteInventory(inventory.getId());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }




}
