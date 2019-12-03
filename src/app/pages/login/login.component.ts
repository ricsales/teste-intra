import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  /**
   * Parâmetro que indica se o usuário quer se manter conectado
   * e não precisar ficar realizando o login toda a vez que acessa a aplicaçao
   */
  manterConectado: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.getUsuarioAutenticado){
      this.router.navigate(['/']);
    }
  }

  /**
   * Método responsável pelas ações associadas ao login
   */
  logar(){
    this.authService.login(this.manterConectado);
    this.router.navigate(['']);
  }

}
