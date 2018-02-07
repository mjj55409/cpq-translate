import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Project} from "../../workspace/project";
import {DataService} from "../../core/services/data-service.service";
import {catchError} from "rxjs/operators";

@Injectable()
export class ProjectDataService extends DataService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAll(): Observable<any> {
    console.log('Retrieving all projects.');
    return this.httpClient
      .get('//localhost:8080/api/project/')
      .pipe(catchError(this.handleError));
  }

  getProjectById(id: number): Observable<Project> {
    console.log('Get project with id = ' + id);
    return this.httpClient.get('//localhost:8080/api/project/' + id + '/');
  }

  saveProject(project: Project): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/project/', project);

  }

  deleteProject(project: Project) {
    console.log('Deleting project: ' + project);
  }

}
