import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincipalComponent } from './Componentes/vista-principal/vista-principal.component';
import { LoginComponent } from './Componentes/login/login.component';

const routes: Routes = [
  {path:"", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
