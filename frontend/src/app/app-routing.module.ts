import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {IndexComponent} from "./index/index.component";
import {AuthGuardService} from "./core/auth/auth-guard.service";
import {CallbackComponent} from "./core/auth/callback/callback.component";
import {PageNotFoundComponent} from "./core/components/page-not-found/page-not-found.component";
import {ProjectDetailComponent} from "./workspace/project-detail/project-detail.component";

const appRoutes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService] },
  {path: 'project/:id',
    component: ProjectDetailComponent,
    canActivate: [AuthGuardService] },
  {path: 'callback', component: CallbackComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
