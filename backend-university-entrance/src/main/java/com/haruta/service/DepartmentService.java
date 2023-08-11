/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.haruta.service;

import com.haruta.pojo.Departments;
import java.util.List;
import java.util.Map;

/**
 *
 * @author nguye
 */
public interface DepartmentService {
    List<Departments> getDpm(Map<String, String> params);
}
