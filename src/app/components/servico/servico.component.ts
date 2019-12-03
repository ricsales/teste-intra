import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.less']
})
export class ServicoComponent implements OnInit {

  constructor() { }

  @Input()
  deveAparecerIcone : boolean = false;
  
  /**URL da imagem que servirá como ícone */
  @Input()
  enderecoIcone : String;

  @Input()
  nomeServico : String;

  /**Descrição suscinta do que se trata o serviço */
  @Input()
  descricaoServico : String;

  ngOnInit() {
  }

}
