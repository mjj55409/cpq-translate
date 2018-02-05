import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../core/services/project.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Array<any>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAll().subscribe(
      res => this.projects = res,
      err => console.log(err)
    );
  }

}
