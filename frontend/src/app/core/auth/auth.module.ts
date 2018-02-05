import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {CallbackComponent} from './callback/callback.component';
import {AuthenticationFacadeService} from "./auth-facade.service";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CallbackComponent],
  providers: [
    AuthService,
    AuthGuardService,
    AuthenticationFacadeService,
  ]
})
export class AuthModule { }
