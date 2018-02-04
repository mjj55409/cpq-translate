package com.mertisconsulting.cpq.translate.service;

import com.mertisconsulting.cpq.translate.model.Project;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service("ProjectService")
public class ProjectServiceImpl implements ProjectService {

    private static final AtomicLong counter = new AtomicLong();

    private static List<Project> projects;

    static {
        projects = populateDummyProjects();
    }

    @Override
    public Project findById(long id) {
        for (Project project : projects) {
            if (project.getId() == id)
                return project;
        }
        return null;
    }

    @Override
    public Project findByName(String name) {
        for (Project project : projects) {
            if (project.getName().equals(name))
                return project;
        }
        return null;
    }

    @Override
    public void saveProject(Project project) {
        deleteProjectById(project.getId());
        projects.add(project);
    }

    @Override
    public void updateProject(Project project) {
        saveProject(project);
    }

    @Override
    public void deleteProjectById(long id) {
        Project project = findById(id);
        if (project != null)
            projects.remove(project);
    }

    @Override
    public List<Project> findAllProjects() {
        return projects;
    }

    @Override
    public void deleteAllProjects() {
        projects.clear();
    }

    @Override
    public boolean isProjectExist(Project project) {
        return findByName(project.getName()) != null;
    }

    private static List<Project> populateDummyProjects() {
        List<Project> p = new ArrayList<>();
        p.add(new Project(counter.incrementAndGet(), "Test Project 1"));
        p.add(new Project(counter.incrementAndGet(), "Test Project 2"));
        return p;
    }

}
