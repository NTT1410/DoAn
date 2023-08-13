/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.repository.impl;

import com.haruta.pojo.Banners;
import com.haruta.repository.BannerRepository;
import java.util.List;
import javax.persistence.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author nguye
 */
@Repository
@Transactional
public class BannerRepositoryImpl implements BannerRepository{
    
    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Banners> getBanner() {
        Session s = this.factory.getObject().getCurrentSession();
        
        Query q = s.createQuery("From Banners");
        
        return q.getResultList();
    }
    
}
