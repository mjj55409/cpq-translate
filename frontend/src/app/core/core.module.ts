import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ProjectService} from "./services/project.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
  ],
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [
    HttpClient,
    ProjectService,
  ]
})
export class CoreModule { }
