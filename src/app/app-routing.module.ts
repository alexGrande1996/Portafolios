import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/VistasPublicas/login/login.component';




const routes: Routes = [
  {path:"login",component:LoginComponent}
  // {path:"login", component:LoginComponent},
  // {path:"inicio", component:VistaPrincipalComponent},
  // {path:"", component:ChatComponent},
  // {path:"loginv2", component:LoginV2Component},
  // {path:"red", component:RedSocialComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
