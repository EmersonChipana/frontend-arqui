import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablaItemsComponent } from './components/tabla.items/tabla.items.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './config/keycloak.init';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaItemsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonToggleModule,
    KeycloakAngularModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
