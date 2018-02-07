import {NgModule} from '@angular/core';
import {ProjectListComponent} from './project-list/project-list.component';
import {SharedModule} from "../shared/shared.module";
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {ProjectDataService} from "../services/data/project.service";
import {WorkspaceFacadeService} from "./workspace-project-facade";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent
  ],
  providers: [
    WorkspaceFacadeService,
    ProjectDataService,
  ]
})
export class WorkspaceProjectModule { }
