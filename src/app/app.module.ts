import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {MatListModule} from '@angular/material/list';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { VistaPrincipalComponent } from './Componentes/vista-principal/vista-principal.component';
import { VistaCargaComponent } from './Componentes/vista-carga/vista-carga.component';
import { VistaGaleriaComponent } from './Componentes/vista-galeria/vista-galeria.component';
import { VistaComicsComponent } from './Componentes/vista-comics/vista-comics.component';
import { VistaMangasComponent } from './Componentes/vista-mangas/vista-mangas.component';
import { VistaEnvioSolicitudComponent } from './Componentes/vista-envio-solicitud/vista-envio-solicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    VistaPrincipalComponent,
    VistaCargaComponent,
    VistaGaleriaComponent,
    VistaComicsComponent,
    VistaMangasComponent,
    VistaEnvioSolicitudComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    NgIf,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatTreeModule,
    MatExpansionModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
