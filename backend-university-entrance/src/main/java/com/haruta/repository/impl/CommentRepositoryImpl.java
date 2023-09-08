/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.repository.impl;

import com.haruta.pojo.Comment;
import com.haruta.repository.CommentRepository;
import java.util.Date;
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
public class CommentRepositoryImpl implements CommentRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public int countComment() {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("SELECT Count(*) FROM Comment");
        return Integer.parseInt(q.getSingleResult().toString());
    }

    @Override
    public List<Comment> countCmtByMonth(Map<String, String> params) {
        Session s = this.factory.getObject().getCurrentSession();
        CriteriaBuilder builder = s.getCriteriaBuilder();
        CriteriaQuery<Comment> c = builder.createQuery(Comment.class);
        Root root = c.from(Comment.class);
        c.select(root);

        if (params != null) {
            String m = params.get("month");
            if (m != null && !m.isEmpty()) {
//                Predicate p = builder.equal(root.get("createdDate"), Date.)
            }
        }

        c.orderBy(builder.asc(root.get("id")));
        Query query = s.createQuery(c);
        return query.getResultList();
    }

    @Override
    public List<Comment> getComments() {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("From Comment");

        return q.getResultList();
    }

}
