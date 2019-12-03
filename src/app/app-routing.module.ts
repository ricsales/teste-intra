import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiaCompletaComponent } from './pages/noticia-completa/noticia-completa.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AppComponent } from './app.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ServicosComponent } from './pages/servicos/servicos.component';


const routes: Routes = [
  

  //Rotas da aplicação

  //a rota padrão é para o componente Home
  { path:'', component: HomeComponent, canActivate: [AuthGuardService]},
  { path:'noticia-completa', component: NoticiaCompletaComponent, canActivate: [AuthGuardService] },
  { path:'servicos', component: ServicosComponent, canActivate: [AuthGuardService] },
  { path:'perfil', component: PerfilComponent, canActivate: [AuthGuardService]},
  { path:'login', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
