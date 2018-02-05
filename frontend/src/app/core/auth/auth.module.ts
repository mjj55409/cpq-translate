import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {CallbackComponent} from './callback/callback.component';
import {AuthenticationFacadeService} from "./auth-facade.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {TokenInterceptorService} from "./token-interceptor.service";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [CallbackComponent],
  providers: [
    AuthService,
    AuthGuardService,
    AuthenticationFacadeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ]
})
export class AuthModule { }
