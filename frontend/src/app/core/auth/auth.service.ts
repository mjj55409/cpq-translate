import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Router} from '@angular/router';

import * as auth0 from 'auth0-js';
import {AUTH_CONFIG} from './auth-config';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID:     AUTH_CONFIG.CLIENT_ID,
    domain:       AUTH_CONFIG.CLIENT_DOMAIN,
    responseType: 'token id_token',
    redirectUri:  AUTH_CONFIG.REDIRECT,
    audience:     AUTH_CONFIG.AUDIENCE,
    scope:        AUTH_CONFIG.SCOPE
  });

  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  userProfile: any;
  userProfile$ = new BehaviorSubject<any>(this.userProfile);

  constructor(private router: Router) {
    if ( this.authenticated ) {
      this.setUserProfile(JSON.parse(localStorage.getItem('profile')));
      this.setLoggedIn(true);
    }
  }

  setLoggedIn(value: boolean) {
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  setUserProfile(value) {
    this.userProfile$.next(value);
    this.userProfile = value;
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication(): void {
    console.log('Handle authentication...');
    this.auth0.parseHash((err, authResult) => {
      if ( authResult && authResult.accessToken && authResult.idToken ) {
        // window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if ( err ) {
        console.log(err);
        this.router.navigate(['/']);
      }
    });
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    this.setLoggedIn(false);
    this.setUserProfile(undefined);
    this.router.navigate(['/home']);
  }

  get authenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.getUserProfile(authResult.accessToken);
  }

  private getUserProfile(token): void {
    const self = this;
    this.auth0.client.userInfo(token, (err, profile) => {
      if ( profile ) {
        self.setUserProfile(profile);
        localStorage.setItem('profile', JSON.stringify(profile));
      }
      if ( err ) {
        console.log(err);
      }
    });
  }

}
