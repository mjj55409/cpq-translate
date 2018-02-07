package com.mertisconsulting.cpq.model;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ProjectController {

    private ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping("project/")
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    @PostMapping("project/")
    public void addProject(@RequestBody Project project) {
        System.out.println(project);
        projectRepository.save(project);
    }

    @GetMapping("project/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable(value = "id") Long projectId) {
        Project project = projectRepository.getOne(projectId);
        if (project == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(project);
    }
}
