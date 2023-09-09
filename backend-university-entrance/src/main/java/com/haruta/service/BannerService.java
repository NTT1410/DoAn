/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.haruta.service;

import com.haruta.pojo.Banner;
import java.util.List;
import java.util.Map;

/**
 *
 * @author nguye
 */
public interface BannerService {
    List<Banner> getBanner();
    
    Banner create(Banner banner, int recruitmentId);

    Banner update(Banner banner);

    Boolean delete(int bannerId);

    Banner findByBannerId(int bannerId);
}
