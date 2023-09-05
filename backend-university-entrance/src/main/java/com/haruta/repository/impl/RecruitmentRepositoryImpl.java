/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.repository.impl;

import com.haruta.pojo.Recruitment;
import com.haruta.repository.RecruitmentRepository;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

/**
 *
 * @author HP
 */
public class RecruitmentRepositoryImpl implements RecruitmentRepository{
    
    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Recruitment> getRecruitments() {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("FROM Recruitment");
        
        return q.getResultList();
    }
    
}
