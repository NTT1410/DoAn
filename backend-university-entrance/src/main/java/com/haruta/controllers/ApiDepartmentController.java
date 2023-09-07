/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.controllers;

import com.haruta.pojo.Department;
import com.haruta.pojo.User;
import com.haruta.service.DepartmentService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nguye
 */
@RestController
@RequestMapping("/api")

public class ApiDepartmentController {
    @Autowired
    private DepartmentService dpmService;
    
//    @GetMapping("/departments")
//    public ResponseEntity<List<Department>> list(@RequestParam Map<String, String> params) {
//        return new ResponseEntity<>(this.dpmService.getDpm(params), HttpStatus.OK);
//    }
    
    @GetMapping("/departments")
    @CrossOrigin
    public ResponseEntity<List<Department>> list(Model model, @RequestParam Map<String, String> params) {
        model.addAttribute("departments", new Department());
        return new ResponseEntity<>(this.dpmService.getDpm(params), HttpStatus.OK);
    }
}
