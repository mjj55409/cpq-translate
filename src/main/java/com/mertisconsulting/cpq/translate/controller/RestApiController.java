package com.mertisconsulting.cpq.translate.controller;

import com.mertisconsulting.cpq.translate.model.Project;
import com.mertisconsulting.cpq.translate.service.ProjectService;
import com.mertisconsulting.cpq.translate.util.ApiErrorMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class RestApiController {

    private static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

    private ProjectService projectService;

    @Autowired
    public void setProjectService(ProjectService projectService) {
        this.projectService = projectService;
    }

    // -------------------Get all Projects------------------------------------------

    @RequestMapping(value = "project/", method = RequestMethod.GET)
    public ResponseEntity<List<Project>> getProjects() {
        List<Project> projects = projectService.findAllProjects();

        if (projects.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    // -------------------Get a Project by Id---------------------------------------

    @RequestMapping(value = "project/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getProject(@PathVariable("id") long id) {
        logger.info("Finding project with id {}.", id);
        Project project = projectService.findById(id);

        if (project == null) {
            logger.error("Project with id {} not found.", id);
            return new ResponseEntity<>(
                    new ApiErrorMessage("No project found with the id " + id + "."),
                    HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    // -------------------Create a Project------------------------------------------

    @RequestMapping(value = "project/", method = RequestMethod.POST)
    public ResponseEntity<?> createProject(@RequestBody Project project, UriComponentsBuilder ucBuilder) {
        logger.info("Creating Project : {}", project);

        if (projectService.isProjectExist(project)) {
            logger.error("Unable to create. A Project with name {} already exist", project.getName());
            return new ResponseEntity<>(
                    new ApiErrorMessage("Unable to create. A Project with name " +
                            project.getName() + " already exists."),
                    HttpStatus.CONFLICT);
        }
        projectService.saveProject(project);

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ucBuilder.path("/api/project/{id}").buildAndExpand(project.getId()).toUri());
        return new ResponseEntity<String>(headers, HttpStatus.CREATED);
    }

    // -------------------Update a Project------------------------------------------

    @RequestMapping(value = "project/{id}", method = RequestMethod.PATCH)
    public ResponseEntity<?> updateProject(@PathVariable("id") long id, @RequestBody Project project) {
        logger.info("Updating Project : {}", project);

        Project currentProject = projectService.findById(project.getId());

        if (currentProject == null) {
            logger.error("Unable to update. A Project with id {} not found.", project.getId());
            return new ResponseEntity<>(
                    new ApiErrorMessage("Unable to update. A Project with id " +
                            project.getId() + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        projectService.updateProject(project);

        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    // -------------------Delete a Project------------------------------------------

    @RequestMapping(value = "project/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteProject(@PathVariable("id") long id) {
        logger.info("Deleting Project with id {}", id);

        Project project = projectService.findById(id);

        if (project == null) {
            logger.error("Unable to delete. Project with id {} not found.", id);
            return new ResponseEntity<>(new ApiErrorMessage("Unable to delete. Project with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        projectService.deleteProjectById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // -------------------Delete all Project----------------------------------------

    @RequestMapping(value = "project/", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteAllProjects() {
        logger.info("Deleting all Projects.");

        projectService.deleteAllProjects();

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
