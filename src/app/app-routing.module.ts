import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/VistasPublicas/login/login.component';
import { InicioComponent } from './Componentes/VistasPublicas/inicio/inicio.component';
import { RedesComponent } from './Componentes/VistasPublicas/redes/redes.component';
import { NosotrosComponent } from './Componentes/VistasPublicas/nosotros/nosotros.component';
import { ServiciosComponent } from './Componentes/VistasPublicas/servicios/servicios.component';




const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"login",component:LoginComponent},
  {path:"redes", component:RedesComponent},
  {path:"nosotros", component:NosotrosComponent},
  {path:"servicios", component:ServiciosComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
