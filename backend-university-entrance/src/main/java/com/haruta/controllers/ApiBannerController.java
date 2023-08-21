/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.controllers;

import com.haruta.pojo.Banners;
import com.haruta.service.BannerService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author nguye
 */
@Controller
@RequestMapping("/api")
@CrossOrigin
public class ApiBannerController {
    @Autowired
    private BannerService banerService;
    
    @GetMapping("/banners")
    public ResponseEntity<List<Banners>> list() {
        return new ResponseEntity<>(this.banerService.getBanner(), HttpStatus.OK);
    }
}
