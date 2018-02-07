import {Injectable} from "@angular/core";
import {ProjectDataService} from "../services/data/project.service";
import {Project} from "./project";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class WorkspaceFacadeService {

  private projects: BehaviorSubject<Array<Project>> = new BehaviorSubject<Array<Project>>([]);
  //private selectedProject: BehaviorSubject<Project> = new BehaviorSubject<Project>(new Project());
  private currentProject: BehaviorSubject<Project> = new BehaviorSubject<Project>(new Project());

  constructor(private projectService: ProjectDataService) {
    this.getAllProjects();
  }

  getProjects(): Observable<Array<Project>> {
    return this.projects.asObservable();
  }

  getProject(id: string): Observable<Project> {
    this.projectService.getProjectById(id).subscribe(
      data => this.setCurrentProject(data)
    );
    return this.currentProject.asObservable();
  }

  // getCurrentProject(): Observable<Project> {
  //   return this.currentProject.asObservable();
  // }
  //
  saveProject(project: Project) {
    return this.projectService.saveProject(project).subscribe(
      () => this.getAllProjects()
    );
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe(
      () => this.getAllProjects()
    );
    // return this.projectService.deleteProject(id).subscribe(
    //   () => this.getAllProjects()
    // );
  }

  // deleteAllProjects(): Observable<any> {
  //   return this.projectService.deleteAllProjects();
  // }
  //
  private setCurrentProject(project: Project) {
    this.currentProject.next(project);
  }

  private getAllProjects() {
    this.projectService.getAll().subscribe(
      data => this.projects.next(data),
      err => console.error(err)
    );
  }
}
