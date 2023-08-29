/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.service;

import com.haruta.pojo.User;
import java.util.List;
import java.util.Map;

/**
 *
 * @author nguye
 */
public interface UserService {
    List<User> getUsers(Map<String, String> params);
    boolean addOrUpdateUser(User u);
}
