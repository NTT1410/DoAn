/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.service.impl;

import com.haruta.pojo.News;
import com.haruta.repository.NewRepository;
import com.haruta.service.NewService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author nguye
 */
@Service
public class NewServiceImpl implements NewService {
    
    @Autowired
    private NewRepository newRepo;

    @Override
    public List<News> getNews() {
        return this.newRepo.getNews();
    }

   
    
}
