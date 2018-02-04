package com.mertisconsulting.cpq.translate.service;

import com.mertisconsulting.cpq.translate.model.Project;

import java.util.List;

public interface ProjectService {
    Project findById(long id);

    Project findByName(String name);

    void saveProject(Project project);

    void updateProject(Project project);

    void deleteProjectById(long id);

    List<Project> findAllProjects();

    void deleteAllProjects();

    boolean isProjectExist(Project project);
}
