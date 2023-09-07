/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.service.impl;

import com.haruta.pojo.Comment;
import com.haruta.repository.CommentRepository;
import com.haruta.service.CommentService;
import java.util.List;
import java.util.Map;
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

    @Override
    public List<Comment> countCmtByMonth(Map<String, String> params) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public List<Comment> getCommets() {
        return this.cmtRepo.getComments(); 
    }
    
}
