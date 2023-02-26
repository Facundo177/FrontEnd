import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { IndexComponent } from './components/index/index.component';
import { ModalLoginComponent } from './components/modales/modal-login/modal-login.component';
import { ModalBannerComponent } from './components/modales/modal-banner/modal-banner.component';
import { ModalLogoutComponent } from './components/modales/modal-logout/modal-logout.component';
import { ModalAcercaComponent } from './components/modales/modal-acerca/modal-acerca.component';
import { ModalEducacionComponent } from './components/modales/modal-educacion/modal-educacion.component';
import { ModalExperienciaComponent } from './components/modales/modal-experiencia/modal-experiencia.component';
import { ModalProyectosComponent } from './components/modales/modal-proyectos/modal-proyectos.component';
import { ModalSkillsComponent } from './components/modales/modal-skills/modal-skills.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    LoginComponent,
    LogoutComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    Pagina404Component,
    IndexComponent,
    ModalLoginComponent,
    ModalBannerComponent,
    ModalLogoutComponent,
    ModalAcercaComponent,
    ModalEducacionComponent,
    ModalExperienciaComponent,
    ModalProyectosComponent,
    ModalSkillsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
