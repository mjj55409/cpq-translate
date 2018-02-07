import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Project} from "../../workspace/project";
import {DataService} from "../../core/services/data-service.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class ProjectDataService extends DataService {

  private static BASE_URL = '//localhost:8080/api/project/';

  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<any> {
    console.log('Retrieving all projects.');
    return this.httpClient
      .get(ProjectDataService.BASE_URL )
      .pipe(catchError(this.handleError));
  }

  getProjectById(id: string): Observable<Project> {
    console.log('Get project with id = ' + id);
    return this.httpClient.get( ProjectDataService.BASE_URL + id + '/');
  }

  saveProject(project: Project): Observable<any> {
    return this.httpClient.post(ProjectDataService.BASE_URL , project);

  }

  deleteProject(id: string): Observable<any> {
    console.log('Deleting project with id ' + id);
    return this.httpClient.delete(ProjectDataService.BASE_URL  + id + '/');
  }

  // deleteAllProjects(): Observable<any> {
  //   console.log('Deleting all projects.');
  //   return this.httpClient.delete(ProjectDataService.BASE_URL);
  // }

}
