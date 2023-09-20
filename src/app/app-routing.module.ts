import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincipalComponent } from './Componentes/vista-principal/vista-principal.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ConfiguracionComponent } from './Componentes/configuracion/configuracion.component';
import { ChatComponent } from './Componentes/chat/chat.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"inicio", component:VistaPrincipalComponent},
  {path:"", component:ChatComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
