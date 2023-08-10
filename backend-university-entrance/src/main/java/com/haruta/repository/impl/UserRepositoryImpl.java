/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.repository.impl;

import com.haruta.pojo.Users;
import com.haruta.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
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
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

        @Override
    public List<Users> getUsers(Map<String, String> params) {
        Session s = this.factory.getObject().getCurrentSession();
        CriteriaBuilder builder = s.getCriteriaBuilder();
        CriteriaQuery<Users> u = builder.createQuery(Users.class);
        Root root = u.from(Users.class);
        u.select(root);

        if (params != null) {
            List<Predicate> predicates = new ArrayList<>();

            String userid = params.get("userid");
            if (userid != null && !userid.isEmpty()) {
                predicates.add(builder.equal(root.get("userId"), Double.parseDouble(userid)));
            }

            String username = params.get("username");
            if (username != null && !username.isEmpty()) {
                predicates.add(builder.like(root.get("username"), String.format("%%%s%%", username)));
            }

            u.where(predicates.toArray(Predicate[]::new));

        }
        u.orderBy(builder.asc(root.get("userId")));
        Query query = s.createQuery(u);
        return query.getResultList();
    }

}
