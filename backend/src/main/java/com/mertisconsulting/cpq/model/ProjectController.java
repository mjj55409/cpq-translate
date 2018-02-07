package com.mertisconsulting.cpq.model;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/project/")
public class ProjectController {

    private ProjectRepository projectRepository;

    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping()
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    @PostMapping()
    public ResponseEntity addProject(@RequestBody Project project) {
        Project p = projectRepository.save(project);
        if (p == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().body(p);
    }

    @PutMapping("{id}/")
    public ResponseEntity<Project> addProject(@PathVariable(value = "id") UUID projectId, @RequestBody Project project) {
        if (projectRepository.getOne(projectId) == null) {
            return ResponseEntity.notFound().build();
        }
        projectRepository.save(project);
        return ResponseEntity.ok().body(project);
    }

    @GetMapping("{id}/")
    public ResponseEntity<Project> getProjectById(@PathVariable(value = "id") UUID projectId) {
        Project project = projectRepository.getOne(projectId);
        if (project == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(project);
    }

    @DeleteMapping("{id}/")
    public ResponseEntity deleteProject(@PathVariable(value = "id") UUID projectId) {
        projectRepository.delete(projectId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping()
    public ResponseEntity deleteAllProjects() {
        projectRepository.deleteAll();
        return ResponseEntity.ok().build();
    }
}
