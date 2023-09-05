/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.controllers;

import com.haruta.pojo.Recruitment;
import com.haruta.service.RecruitmentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author HP
 */

@RestController
@RequestMapping("/api")
public class ApiRecruitmentController {
    
    @Autowired
    public RecruitmentService recruitmentService;
    
    @GetMapping("/recruiments/")
    @CrossOrigin
    public ResponseEntity<List<Recruitment>> list() {
        return new ResponseEntity<>(this.recruitmentService.getRecruitments(), HttpStatus.OK);
    }
}
