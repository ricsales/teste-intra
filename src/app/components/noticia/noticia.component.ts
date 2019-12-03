import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../../app/entities/Noticia';

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.less']
})
export class NoticiaComponent implements OnInit {

  @Input()
  noticia : Noticia;


  /** atributo que indica se deve exibir a notícia completa, 
   * ou apenas no formato de resumo para rede social
   * */
  @Input()
  completa : boolean;
  
 

 
  constructor() { }
 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }

  ngOnInit() {
  }

  /**
   * Verifica o tipo da notícia
   * @param tipo Nome do tipo da notícia
   */
  ehTipo(tipo:string): boolean{
    switch(tipo){
      case 'NOTICIA':  {return this.noticia.tipo === Noticia.TIPO_NOTICIA; break;}
      case 'COMUNICADO':  {return this.noticia.tipo === Noticia.TIPO_COMUNICADO; break;}
      case 'CAMPANHA':  {return this.noticia.tipo === Noticia.TIPO_CAMPANHA; break;}
      default: { return null ;}
    }
  }

  getTipoNoticia(): String{
    switch(this.noticia.tipo) {
      case Noticia.TIPO_NOTICIA : return 'NOTÍCIA';
      case Noticia.TIPO_COMUNICADO: return 'COMUNICADO';
      case Noticia.TIPO_CAMPANHA: return 'CAMPANHA';
      default: return null ;
    }
  }

  montarUrlNoticia(){
    //TODO
    return 'http://www.mprn.mp.br';
  }

  imprimirPagina(){
    window.print();
  }

}
