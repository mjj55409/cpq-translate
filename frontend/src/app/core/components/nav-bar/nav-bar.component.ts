import {Component, OnInit} from '@angular/core';
import {AuthenticationFacadeService} from "../../auth/auth-facade.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public user: any;

  constructor(private authenticationFacade: AuthenticationFacadeService) { }

  ngOnInit() {
    this.authenticationFacade.loggedInUser$.subscribe(profile => this.user = profile);
  }

  login() {
    this.authenticationFacade.doLogin();
  }

  logout() {
    this.authenticationFacade.doLogout();
  }

  isAuthenticated() {
    return this.authenticationFacade.isAuthenticated();
  }

}
