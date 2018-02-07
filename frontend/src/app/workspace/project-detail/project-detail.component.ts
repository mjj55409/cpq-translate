import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {WorkspaceFacadeService} from "../workspace-project-facade";
import {Location} from "@angular/common";
import {Project} from "../project";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  projectForm: FormGroup;
  sub: Subscription;
  isCreating: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private facade: WorkspaceFacadeService) {
    this.createForm();
  }

  ngOnInit() {
    // this.sub = this.route.params.subscribe( params =>
    //   this.facade.getProject(params['id']).subscribe(data =>
    //     this.projectForm.patchValue({
    //       id: data.id,
    //       name: data.name,
    //       description: data.description,
    //     })));

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.facade.getProject(id).subscribe( data =>
          this.projectForm.patchValue({
            id: data.id,
            name: data.name,
            description: data.description,
          })
        )
      } else {
        this.isCreating = true;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    this.facade.saveProject(this.prepareSave());
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

  deleteProject() {
    this.facade.deleteProject(this.projectForm.get('id').value);
    this.location.back();
  }

  get name() { return this.projectForm.get('name'); }

  get id() { return this.projectForm.get('id'); }

  private createForm() {
    this.projectForm = this.fb.group({
        id: '',
        name: ['', Validators.required],
        description: '',
    });
  }

  private prepareSave(): Project {
    if (this.isCreating) {
      return {
        name: this.projectForm.value.name,
        description: this.projectForm.value.description,
      };
    } else {
      return {
        id: this.projectForm.value.id,
        name: this.projectForm.value.name,
        description: this.projectForm.value.description,
      };
    }
  }
}
