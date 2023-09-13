import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincipalComponent } from './Componentes/vista-principal/vista-principal.component';

const routes: Routes = [
  {path:"", component:VistaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
