import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.less']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  nomeServidor = "Fulano de Tal de Testes";

  ngOnInit() {
  }

 
}
