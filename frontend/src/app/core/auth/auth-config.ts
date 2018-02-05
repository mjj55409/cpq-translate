interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID:     'biAXq3RFFwLdyaI6E6LV8LKOJcN0Ke2z',
  CLIENT_DOMAIN: 'mertisconsulting.auth0.com',
  AUDIENCE:      'https://mertisconsulting.auth0.com/userinfo',
  REDIRECT:      'http://localhost:4200/callback',
  SCOPE:         'openid profile email'
};
