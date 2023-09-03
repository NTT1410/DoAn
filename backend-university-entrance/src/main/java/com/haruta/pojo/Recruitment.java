/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.haruta.pojo;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author nguye
 */
@Entity
@Table(name = "recruitment")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Recruitment.findAll", query = "SELECT r FROM Recruitment r"),
    @NamedQuery(name = "Recruitment.findById", query = "SELECT r FROM Recruitment r WHERE r.id = :id"),
    @NamedQuery(name = "Recruitment.findByName", query = "SELECT r FROM Recruitment r WHERE r.name = :name"),
    @NamedQuery(name = "Recruitment.findByStartDate", query = "SELECT r FROM Recruitment r WHERE r.startDate = :startDate"),
    @NamedQuery(name = "Recruitment.findByEndDate", query = "SELECT r FROM Recruitment r WHERE r.endDate = :endDate"),
    @NamedQuery(name = "Recruitment.findByType", query = "SELECT r FROM Recruitment r WHERE r.type = :type"),
    @NamedQuery(name = "Recruitment.findByMajor", query = "SELECT r FROM Recruitment r WHERE r.major = :major"),
    @NamedQuery(name = "Recruitment.findBySocre", query = "SELECT r FROM Recruitment r WHERE r.socre = :socre")})
public class Recruitment implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "name")
    private String name;
    @Basic(optional = false)
    @NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "description")
    private String description;
    @Basic(optional = false)
    @NotNull
    @Column(name = "start_date")
    @Temporal(TemporalType.DATE)
    private Date startDate;
    @Basic(optional = false)
    @NotNull
    @Column(name = "end_date")
    @Temporal(TemporalType.DATE)
    private Date endDate;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 10)
    @Column(name = "type")
    private String type;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 255)
    @Column(name = "major")
    private String major;
    @Basic(optional = false)
    @NotNull
    @Column(name = "socre")
    private float socre;

    public Recruitment() {
    }

    public Recruitment(Integer id) {
        this.id = id;
    }

    public Recruitment(Integer id, String name, String description, Date startDate, Date endDate, String type, String major, float socre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.major = major;
        this.socre = socre;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public float getSocre() {
        return socre;
    }

    public void setSocre(float socre) {
        this.socre = socre;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Recruitment)) {
            return false;
        }
        Recruitment other = (Recruitment) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.haruta.pojo.Recruitment[ id=" + id + " ]";
    }
    
}
