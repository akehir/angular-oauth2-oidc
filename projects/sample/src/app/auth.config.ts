// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://dev-859497.oktapreview.com/oauth2/default',
  // issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'spa-demo',
  clientId: '0oagowd9paD2ChWre0h7',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  // scope: 'openid profile email voucher',
  scope: 'openid profile email',

  // responseType: 'id_token',

  // silentRefreshShowIFrame: true,

  responseType: 'id_token token',

  showDebugInformation: true,

  sessionChecksEnabled: false
};
