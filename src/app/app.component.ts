import { Component } from '@angular/core';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  title = 'Nova Intranet MPRN';
  deveAparecerMenu: boolean = false;
  
  constructor(private authGuard:AuthGuardService, private authService: AuthService, private router: Router){
    this.deveAparecerMenu = authService.getUsuarioAutenticado();
    authService.mostrarHeaderEmitter.subscribe(event =>{
      this.deveAparecerMenu = event;
    })
  }

  
  sair(){
    this.authService.logout();
    this.router.navigate(['']);
  }

  /**método para verificar qual o item de menu (parte de baixo) atual selecionado */
  ehItemMenuSelecionado(nomeMenu){
    return this.router.url === nomeMenu;
  }

}