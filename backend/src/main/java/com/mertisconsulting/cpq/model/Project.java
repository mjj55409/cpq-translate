package com.mertisconsulting.cpq.model;

public class Project {

    private long id;
    private String name;

    public Project() {
        this.id = 0;
    }

    public Project(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Pool [id=" + id + ", name=" + name + "]";
    }
}
