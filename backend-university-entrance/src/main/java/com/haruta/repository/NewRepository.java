/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.haruta.repository;

import com.haruta.pojo.News;
import java.util.List;

/**
 *
 * @author nguye
 */
public interface NewRepository {
    List<News> getNews();
}
