import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthenticationFacadeService {

  public loggedInUser$: Observable<any>;
  public isAuthenticated$: Observable<boolean>;

  constructor(private router: Router, private authenticationService: AuthService) {
    this.loggedInUser$ = this.authenticationService.userProfile$;
    this.isAuthenticated$ = this.authenticationService.loggedIn$;
  }

  doLogin() {
    this.authenticationService.login();
  }

  doLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return this.authenticationService.authenticated;
  }

}
