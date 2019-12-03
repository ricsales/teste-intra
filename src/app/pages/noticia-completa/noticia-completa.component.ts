import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../../app/entities/Noticia';

@Component({
  selector: 'app-noticia-completa',
  templateUrl: './noticia-completa.component.html',
  styleUrls: ['./noticia-completa.component.less']
})
export class NoticiaCompletaComponent implements OnInit {

  constructor() {}

  noticiaAtual : Noticia;
  
  ngOnInit() {
    this.noticiaAtual = new Noticia();
    this.noticiaAtual.titulo  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    this.noticiaAtual.resumo = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
    this.noticiaAtual.conteudo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet risus in nulla accumsan placerat at a turpis. Sed porttitor, felis id dictum porta, quam ligula faucibus diam, vitae convallis mauris tellus non velit. Vivamus id tempus turpis. Vivamus dolor diam, elementum ut vestibulum vel, rutrum ut libero. Aenean eget ornare mauris, nec maximus nunc. Suspendisse ornare erat id eleifend fringilla. Aenean in diam leo. Duis vehicula non sem eget posuere. Integer quis efficitur tellus, quis suscipit tellus. Sed faucibus eu orci ac sagittis. Nam pretium, dui at semper euismod, nibh nisi aliquam urna, quis varius enim enim vel ligula. Sed quis nulla vitae lorem congue fermentum in sit amet eros. Sed purus lacus, rhoncus non turpis ac, consequat faucibus est. Sed molestie facilisis consectetur.

    Mauris viverra quis tortor et euismod. Curabitur finibus faucibus turpis. Fusce neque justo, pulvinar quis faucibus a, commodo facilisis tortor. Proin nunc magna, hendrerit vitae viverra quis, interdum ac augue. Integer ut dapibus lorem. Sed id elit varius, hendrerit odio eget, pretium sem. Nulla ut lectus imperdiet, egestas eros id, iaculis nulla. Etiam ut ultricies purus, a condimentum felis. Sed eleifend nulla a dolor dictum tempor.
    
    Fusce fringilla imperdiet mi sit amet malesuada. Integer egestas ante sed elit suscipit, id pulvinar sem tempus. Phasellus eu enim odio. Curabitur ultricies metus mollis viverra faucibus. Vestibulum a sem eget mauris efficitur lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tempus ornare aliquet. Curabitur ac justo lobortis, facilisis urna ut, posuere velit. Maecenas non nulla quam. Vivamus imperdiet lectus in erat eleifend pretium. Praesent venenatis et magna eu placerat. Vivamus imperdiet orci tortor, id rutrum lectus accumsan et. Integer quam leo, dictum eget venenatis sed, fermentum quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nunc congue consectetur egestas. Sed interdum nibh eget erat facilisis, eu bibendum nulla semper.
    
    Cras cursus, diam vel ultricies varius, nulla libero rutrum mauris, vel efficitur neque sem sit amet ex. Maecenas a convallis justo. Sed laoreet congue est, et rhoncus nibh molestie in. Phasellus posuere sem tincidunt nulla auctor pellentesque. Cras egestas augue eget felis porta tempor. Maecenas interdum nisi lacus, eu venenatis arcu egestas eu. Cras porttitor pretium est, quis gravida nibh. Ut ut efficitur eros. Aliquam quis vestibulum tortor, at euismod velit. Aenean ac nisl purus. Aliquam consectetur tortor ac purus iaculis iaculis. Suspendisse potenti. Fusce arcu ligula, gravida eget lorem ac, hendrerit ultrices nisl. Phasellus tincidunt scelerisque elit. Vivamus sagittis lobortis tincidunt. Vivamus convallis, tortor nec tincidunt venenatis, felis tortor suscipit justo, et lobortis quam lacus et felis.
    
    Quisque interdum tincidunt velit, quis pellentesque sem. Quisque porta nibh at felis malesuada feugiat in accumsan lorem. Donec interdum enim vel velit rutrum, ut condimentum nulla tristique. Praesent a molestie lectus. Aliquam nec velit eu metus malesuada ullamcorper sed sit amet tellus. Ut molestie eget leo tempus elementum. Pellentesque et velit felis. Phasellus efficitur felis ipsum, eu blandit nisl auctor et.`
    
    this.noticiaAtual.dataEHora = new Date();
    this.noticiaAtual.imagemDestaque = 'https://intranet.mp.rn.gov.br/Image_noticia.ashx?ID=274667';
    this.noticiaAtual.tipo = Noticia.TIPO_COMUNICADO;

    this.noticiaAtual.listaDeTags.push("membros");
    this.noticiaAtual.listaDeTags.push("servidores");
    this.noticiaAtual.listaDeTags.push("sede");

  }

}
