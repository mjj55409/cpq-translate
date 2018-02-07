import {Component, OnInit} from '@angular/core';
import {WorkspaceFacadeService} from "../workspace/workspace-project-facade";
import {Project} from "../workspace/project";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Array<Project>;

  constructor(private workspaceFacade: WorkspaceFacadeService) { }

  ngOnInit() {
    this.workspaceFacade.getProjects().subscribe(data => this.projects = data);
  }

}
