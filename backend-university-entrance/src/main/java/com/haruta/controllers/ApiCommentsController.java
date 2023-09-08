/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.controllers;

import com.haruta.pojo.Comment;
import com.haruta.service.CommentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author HP
 */

@RestController
@RequestMapping("/api")
public class ApiCommentsController {
    
    @Autowired
    private CommentService commentService;
    
    @GetMapping("/comments/")
    @CrossOrigin
    public ResponseEntity<List<Comment>> list() {
        return new ResponseEntity<>(this.commentService.getCommets(), HttpStatus.OK);
    }
    
    //ok
    @GetMapping("/news/{newsId}/")
    @CrossOrigin
    public ResponseEntity<List<Comment>> listNewsByRec(@PathVariable(value = "newsId") int id) {
        return new ResponseEntity<>(this.commentService.getCommentsByNews(id), HttpStatus.OK);
    }
    
   
    
    
    
}
