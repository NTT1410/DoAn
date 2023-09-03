/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.service;

import com.haruta.pojo.User;
import java.util.List;
import java.util.Map;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author nguye
 */
public interface UserService extends UserDetailsService{
    List<User> getUsers(Map<String, String> params);
    User getUserByUn(String username);  
    User addUser(Map<String, String> params, MultipartFile avatar);
    boolean addOrUpdateUser(User u);    
    boolean authUser(String username, String password);
    
}
