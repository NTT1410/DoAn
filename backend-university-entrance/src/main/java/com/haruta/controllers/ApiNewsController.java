/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.controllers;

import com.haruta.pojo.News;
import com.haruta.service.NewService;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nguye
 */
@RestController
@RequestMapping("/api")
public class ApiNewsController {
    @Autowired
    private NewService newService;
    
    
    //ok
    @GetMapping("/news/")
    @CrossOrigin
    public ResponseEntity<List<News>> list() {
        return new ResponseEntity<>(this.newService.getNews(), HttpStatus.OK);
    }
    
    @GetMapping("/recruiments/{recruimentId}/news/")
    @CrossOrigin
    public ResponseEntity<List<News>> listNewsByRec(@PathVariable(value = "recruimentId") int id) {
        return new ResponseEntity<>(this.newService.getNewsByRecruitment(id), HttpStatus.OK);
    }
    
    
    
}
