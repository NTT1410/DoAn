/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.service.impl;

import com.haruta.pojo.Banner;
import com.haruta.repository.BannerRepository;
import com.haruta.service.BannerService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author nguye
 */
@Service
public class BannerServiceImpl implements BannerService{
    @Autowired
    private BannerRepository bannerRepo;

    @Override
    public List<Banner> getBanner() {
        return this.bannerRepo.getBanner();
    }
}
