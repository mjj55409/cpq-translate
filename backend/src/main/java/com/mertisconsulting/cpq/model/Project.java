package com.mertisconsulting.cpq.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(uniqueConstraints=@UniqueConstraint(columnNames="NAME"))
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Project implements Serializable {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;
    @NotBlank
    private String name;
    private String description;

    protected Project() {
    }

    public Project(String name) {
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        return "Project: [id = " + this.id + " name = " + this.name + "]";
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
