import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ProjectDataService} from "../services/data/project.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AuthModule} from "./auth/auth.module";

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    AuthModule,
  ],
  declarations: [
    NavBarComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavBarComponent,
    PageNotFoundComponent,
  ],
  providers: [
    HttpClient,
    ProjectDataService,
  ]
})
export class CoreModule { }
