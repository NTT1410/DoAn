/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.service.impl;

import com.haruta.repository.CommentRepository;
import com.haruta.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author nguye
 */
@Service
public class CommentServiceImpl implements CommentService{
    
    @Autowired
    private CommentRepository cmtRepo;

    @Override
    public int countComment() {
        return this.cmtRepo.countComment();
    }
    
}
