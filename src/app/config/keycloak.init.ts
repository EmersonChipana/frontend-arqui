import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environments/environment";

export function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: environment.url_keycloak,
                realm: 'software',
                clientId: 'frontend'
            },
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false
            }
        });
}
  