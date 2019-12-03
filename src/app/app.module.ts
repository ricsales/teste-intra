import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { SafePipe } from './pipes/safe.pipe';
import { NoticiaCompletaComponent } from './pages/noticia-completa/noticia-completa.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ServicoComponent } from './components/servico/servico.component';
import { ModalModule, CarouselModule, BsDropdownModule } from 'ngx-bootstrap';


registerLocaleData(localeBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoticiaComponent,
    SafePipe,
    NoticiaCompletaComponent,
    PerfilComponent,
    ServicosComponent,
    ServicoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),

  ],
  providers: [AuthService, AuthGuardService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
