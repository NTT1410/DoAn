/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.service.impl;

import com.haruta.pojo.News;
import com.haruta.repository.NewRepository;
import com.haruta.repository.RecruitmentRepository;
import com.haruta.service.NewService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author nguye
 */
@Service
@Transactional
public class NewServiceImpl implements NewService {
    
    @Autowired
    private NewRepository newRepo;
    
    @Autowired
    private RecruitmentRepository recuitRepo;

    @Override
    public List<News> getNews(Map<String, String> params) {
        return this.newRepo.getNews(params);
    }

    @Override
    public List<News> getNewsByRecruitment(int recruitmentId) {
         return this.newRepo.getNewsByRecruitment(recruitmentId);
    }

    @Override
    public int countNews() {
        return this.newRepo.countNews();
    }

//    @Override
//    public News create(News news, int newsId) {
//        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
//    }

    @Override
    public News update(News news) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public Boolean delete(int newsId) {
         News news = newRepo.findNewsById(newsId);
        if(news != null){
            newRepo.delete(news);
            return true;
        }
        return false;
    }

    @Override
    public News findNewsById(int newsId) {
        return this.newRepo.findNewsById(newsId);
    }
    
    
   
    
}
