import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaItemsComponent } from './components/tabla.items/tabla.items.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent, data: { roles: ['user'] }, canActivate: [AuthGuard] },
  { path: 'tabla', component: TablaItemsComponent, data: { roles: ['admin'] }, canActivate: [AuthGuard] },
  { path: 'error', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
