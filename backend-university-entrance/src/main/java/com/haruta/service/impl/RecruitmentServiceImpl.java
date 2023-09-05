/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.service.impl;

import com.haruta.pojo.Recruitment;
import com.haruta.repository.RecruitmentRepository;
import com.haruta.service.RecruitmentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author HP
 */
public class RecruitmentServiceImpl implements RecruitmentService {

    @Autowired
    private RecruitmentRepository recruitmentRepo;
    
    @Override
    public List<Recruitment> getRecruitments() {

        return this.recruitmentRepo.getRecruitments();

    }

}
