import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {WorkspaceFacadeService} from "../workspace-project-facade";
import {Location} from "@angular/common";
import {Project} from "../project";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private facade: WorkspaceFacadeService) {
    this.createForm();
  }

  ngOnInit() {
    this.route.params.subscribe( params =>
      this.facade.getProject(params['id']).subscribe(data =>
        this.projectForm.patchValue({
          id: data.id,
          name: data.name,
          description: data.description,
        })));
  }

  onSubmit() {
    this.facade.saveProject(this.prepareSave());
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

  private createForm() {
    this.projectForm = this.fb.group({
        id: 0,
        name: ['', Validators.required],
        description: '',
    });
  }

  private prepareSave(): Project {
    return {
      id: this.projectForm.value.id,
      name: this.projectForm.value.name,
      description: this.projectForm.value.description,
    };
  }
}
