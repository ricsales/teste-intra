import { Component, OnInit, TemplateRef,ViewChildren, ViewChild } from '@angular/core';
import { Noticia } from '../../../app/entities/Noticia';
import { NoticiaComponent } from '../../../app/components/noticia/noticia.component';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { CarouselConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: false, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {
  
  /**
   * Usado para controle do modal
   */
  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;
    
  constructor(private modalService: BsModalService) {}
 
  noticias : Noticia [] = [];
  
  ngOnInit() {
    let noticia = new Noticia();
    noticia.titulo  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    noticia.resumo = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
    noticia.conteudo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet risus in nulla accumsan placerat at a turpis. Sed porttitor, felis id dictum porta, quam ligula faucibus diam, vitae convallis mauris tellus non velit. Vivamus id tempus turpis. Vivamus dolor diam, elementum ut vestibulum vel, rutrum ut libero. Aenean eget ornare mauris, nec maximus nunc. Suspendisse ornare erat id eleifend fringilla. Aenean in diam leo. Duis vehicula non sem eget posuere. Integer quis efficitur tellus, quis suscipit tellus. Sed faucibus eu orci ac sagittis. Nam pretium, dui at semper euismod, nibh nisi aliquam urna, quis varius enim enim vel ligula. Sed quis nulla vitae lorem congue fermentum in sit amet eros. Sed purus lacus, rhoncus non turpis ac, consequat faucibus est. Sed molestie facilisis consectetur.

    Mauris viverra quis tortor et euismod. Curabitur finibus faucibus turpis. Fusce neque justo, pulvinar quis faucibus a, commodo facilisis tortor. Proin nunc magna, hendrerit vitae viverra quis, interdum ac augue. Integer ut dapibus lorem. Sed id elit varius, hendrerit odio eget, pretium sem. Nulla ut lectus imperdiet, egestas eros id, iaculis nulla. Etiam ut ultricies purus, a condimentum felis. Sed eleifend nulla a dolor dictum tempor.
    
    Fusce fringilla imperdiet mi sit amet malesuada. Integer egestas ante sed elit suscipit, id pulvinar sem tempus. Phasellus eu enim odio. Curabitur ultricies metus mollis viverra faucibus. Vestibulum a sem eget mauris efficitur lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tempus ornare aliquet. Curabitur ac justo lobortis, facilisis urna ut, posuere velit. Maecenas non nulla quam. Vivamus imperdiet lectus in erat eleifend pretium. Praesent venenatis et magna eu placerat. Vivamus imperdiet orci tortor, id rutrum lectus accumsan et. Integer quam leo, dictum eget venenatis sed, fermentum quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nunc congue consectetur egestas. Sed interdum nibh eget erat facilisis, eu bibendum nulla semper.
    
    Cras cursus, diam vel ultricies varius, nulla libero rutrum mauris, vel efficitur neque sem sit amet ex. Maecenas a convallis justo. Sed laoreet congue est, et rhoncus nibh molestie in. Phasellus posuere sem tincidunt nulla auctor pellentesque. Cras egestas augue eget felis porta tempor. Maecenas interdum nisi lacus, eu venenatis arcu egestas eu. Cras porttitor pretium est, quis gravida nibh. Ut ut efficitur eros. Aliquam quis vestibulum tortor, at euismod velit. Aenean ac nisl purus. Aliquam consectetur tortor ac purus iaculis iaculis. Suspendisse potenti. Fusce arcu ligula, gravida eget lorem ac, hendrerit ultrices nisl. Phasellus tincidunt scelerisque elit. Vivamus sagittis lobortis tincidunt. Vivamus convallis, tortor nec tincidunt venenatis, felis tortor suscipit justo, et lobortis quam lacus et felis.
    
    Quisque interdum tincidunt velit, quis pellentesque sem. Quisque porta nibh at felis malesuada feugiat in accumsan lorem. Donec interdum enim vel velit rutrum, ut condimentum nulla tristique. Praesent a molestie lectus. Aliquam nec velit eu metus malesuada ullamcorper sed sit amet tellus. Ut molestie eget leo tempus elementum. Pellentesque et velit felis. Phasellus efficitur felis ipsum, eu blandit nisl auctor et.`
    
    noticia.dataEHora = new Date();
    noticia.imagemDestaque = 'https://intranet.mp.rn.gov.br/Image_noticia.ashx?ID=274669';
    noticia.tipo = Noticia.TIPO_NOTICIA;

    noticia.listaDeTags.push("membros");
    noticia.listaDeTags.push("servidores");
    noticia.listaDeTags.push("sede");
    
    this.noticias.push(noticia);

    noticia = new Noticia();
    noticia.titulo  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    noticia.resumo = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
    noticia.conteudo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet risus in nulla accumsan placerat at a turpis. Sed porttitor, felis id dictum porta, quam ligula faucibus diam, vitae convallis mauris tellus non velit. Vivamus id tempus turpis. Vivamus dolor diam, elementum ut vestibulum vel, rutrum ut libero. Aenean eget ornare mauris, nec maximus nunc. Suspendisse ornare erat id eleifend fringilla. Aenean in diam leo. Duis vehicula non sem eget posuere. Integer quis efficitur tellus, quis suscipit tellus. Sed faucibus eu orci ac sagittis. Nam pretium, dui at semper euismod, nibh nisi aliquam urna, quis varius enim enim vel ligula. Sed quis nulla vitae lorem congue fermentum in sit amet eros. Sed purus lacus, rhoncus non turpis ac, consequat faucibus est. Sed molestie facilisis consectetur.

    Mauris viverra quis tortor et euismod. Curabitur finibus faucibus turpis. Fusce neque justo, pulvinar quis faucibus a, commodo facilisis tortor. Proin nunc magna, hendrerit vitae viverra quis, interdum ac augue. Integer ut dapibus lorem. Sed id elit varius, hendrerit odio eget, pretium sem. Nulla ut lectus imperdiet, egestas eros id, iaculis nulla. Etiam ut ultricies purus, a condimentum felis. Sed eleifend nulla a dolor dictum tempor.
    
    Fusce fringilla imperdiet mi sit amet malesuada. Integer egestas ante sed elit suscipit, id pulvinar sem tempus. Phasellus eu enim odio. Curabitur ultricies metus mollis viverra faucibus. Vestibulum a sem eget mauris efficitur lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tempus ornare aliquet. Curabitur ac justo lobortis, facilisis urna ut, posuere velit. Maecenas non nulla quam. Vivamus imperdiet lectus in erat eleifend pretium. Praesent venenatis et magna eu placerat. Vivamus imperdiet orci tortor, id rutrum lectus accumsan et. Integer quam leo, dictum eget venenatis sed, fermentum quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nunc congue consectetur egestas. Sed interdum nibh eget erat facilisis, eu bibendum nulla semper.
    
    Cras cursus, diam vel ultricies varius, nulla libero rutrum mauris, vel efficitur neque sem sit amet ex. Maecenas a convallis justo. Sed laoreet congue est, et rhoncus nibh molestie in. Phasellus posuere sem tincidunt nulla auctor pellentesque. Cras egestas augue eget felis porta tempor. Maecenas interdum nisi lacus, eu venenatis arcu egestas eu. Cras porttitor pretium est, quis gravida nibh. Ut ut efficitur eros. Aliquam quis vestibulum tortor, at euismod velit. Aenean ac nisl purus. Aliquam consectetur tortor ac purus iaculis iaculis. Suspendisse potenti. Fusce arcu ligula, gravida eget lorem ac, hendrerit ultrices nisl. Phasellus tincidunt scelerisque elit. Vivamus sagittis lobortis tincidunt. Vivamus convallis, tortor nec tincidunt venenatis, felis tortor suscipit justo, et lobortis quam lacus et felis.
    
    Quisque interdum tincidunt velit, quis pellentesque sem. Quisque porta nibh at felis malesuada feugiat in accumsan lorem. Donec interdum enim vel velit rutrum, ut condimentum nulla tristique. Praesent a molestie lectus. Aliquam nec velit eu metus malesuada ullamcorper sed sit amet tellus. Ut molestie eget leo tempus elementum. Pellentesque et velit felis. Phasellus efficitur felis ipsum, eu blandit nisl auctor et.`
    
    noticia.dataEHora = new Date();
    noticia.imagemDestaque = 'https://intranet.mp.rn.gov.br/Image_noticia.ashx?ID=274670';
    noticia.tipo = Noticia.TIPO_COMUNICADO;

    noticia.listaDeTags.push("membros");
    noticia.listaDeTags.push("servidores");
    noticia.listaDeTags.push("sede");
    

    this.noticias.push(noticia);

    noticia = new Noticia();
    noticia.titulo  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    noticia.resumo = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
    noticia.conteudo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet risus in nulla accumsan placerat at a turpis. Sed porttitor, felis id dictum porta, quam ligula faucibus diam, vitae convallis mauris tellus non velit. Vivamus id tempus turpis. Vivamus dolor diam, elementum ut vestibulum vel, rutrum ut libero. Aenean eget ornare mauris, nec maximus nunc. Suspendisse ornare erat id eleifend fringilla. Aenean in diam leo. Duis vehicula non sem eget posuere. Integer quis efficitur tellus, quis suscipit tellus. Sed faucibus eu orci ac sagittis. Nam pretium, dui at semper euismod, nibh nisi aliquam urna, quis varius enim enim vel ligula. Sed quis nulla vitae lorem congue fermentum in sit amet eros. Sed purus lacus, rhoncus non turpis ac, consequat faucibus est. Sed molestie facilisis consectetur.

    Mauris viverra quis tortor et euismod. Curabitur finibus faucibus turpis. Fusce neque justo, pulvinar quis faucibus a, commodo facilisis tortor. Proin nunc magna, hendrerit vitae viverra quis, interdum ac augue. Integer ut dapibus lorem. Sed id elit varius, hendrerit odio eget, pretium sem. Nulla ut lectus imperdiet, egestas eros id, iaculis nulla. Etiam ut ultricies purus, a condimentum felis. Sed eleifend nulla a dolor dictum tempor.
    
    Fusce fringilla imperdiet mi sit amet malesuada. Integer egestas ante sed elit suscipit, id pulvinar sem tempus. Phasellus eu enim odio. Curabitur ultricies metus mollis viverra faucibus. Vestibulum a sem eget mauris efficitur lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tempus ornare aliquet. Curabitur ac justo lobortis, facilisis urna ut, posuere velit. Maecenas non nulla quam. Vivamus imperdiet lectus in erat eleifend pretium. Praesent venenatis et magna eu placerat. Vivamus imperdiet orci tortor, id rutrum lectus accumsan et. Integer quam leo, dictum eget venenatis sed, fermentum quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nunc congue consectetur egestas. Sed interdum nibh eget erat facilisis, eu bibendum nulla semper.
    
    Cras cursus, diam vel ultricies varius, nulla libero rutrum mauris, vel efficitur neque sem sit amet ex. Maecenas a convallis justo. Sed laoreet congue est, et rhoncus nibh molestie in. Phasellus posuere sem tincidunt nulla auctor pellentesque. Cras egestas augue eget felis porta tempor. Maecenas interdum nisi lacus, eu venenatis arcu egestas eu. Cras porttitor pretium est, quis gravida nibh. Ut ut efficitur eros. Aliquam quis vestibulum tortor, at euismod velit. Aenean ac nisl purus. Aliquam consectetur tortor ac purus iaculis iaculis. Suspendisse potenti. Fusce arcu ligula, gravida eget lorem ac, hendrerit ultrices nisl. Phasellus tincidunt scelerisque elit. Vivamus sagittis lobortis tincidunt. Vivamus convallis, tortor nec tincidunt venenatis, felis tortor suscipit justo, et lobortis quam lacus et felis.
    
    Quisque interdum tincidunt velit, quis pellentesque sem. Quisque porta nibh at felis malesuada feugiat in accumsan lorem. Donec interdum enim vel velit rutrum, ut condimentum nulla tristique. Praesent a molestie lectus. Aliquam nec velit eu metus malesuada ullamcorper sed sit amet tellus. Ut molestie eget leo tempus elementum. Pellentesque et velit felis. Phasellus efficitur felis ipsum, eu blandit nisl auctor et.`
    
    noticia.dataEHora = new Date();
    noticia.imagemDestaque = 'https://intranet.mp.rn.gov.br/Image_noticia.ashx?ID=274667';
    noticia.tipo = Noticia.TIPO_CAMPANHA;
    

    noticia.listaDeTags.push("membros");
    noticia.listaDeTags.push("servidores");
    noticia.listaDeTags.push("sede");

    this.noticias.push(noticia);

    this.verificarSeDeveAbrirStories();


  }

  /**
   * Método para abrir o modal
   */
  openModal() {
    this.isModalShown = true;
    localStorage.setItem('ultimaAberturaStories', JSON.stringify(new Date().setHours(0,0,0,0)));
  }

 
  /**
   * Método para fechar o modal
   */
  hideModal(): void {
    this.autoShownModal.hide();
  }
  

  onHidden(): void {
    this.isModalShown = false;
  }

  /**
   * Método executado quando a página é iniciada.
   * Verifica se deve abrir o stories expandido para o usuário
   */
  verificarSeDeveAbrirStories(){
    let dataUltimaAberturaStories = new Date(JSON.parse(localStorage.getItem('ultimaAberturaStories')));
    let hoje = new Date();
    
    hoje.setHours(0,0,0,0);
    let comparacao = dataUltimaAberturaStories.getTime() === hoje.getTime();
    
    //Atualmente está abrindo uma vez ao dia
    if (!comparacao){
      this.openModal();
    }
  }

  carregarMaisNoticias(){
    let noticia = new Noticia();
    noticia.titulo  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    noticia.resumo = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
    noticia.conteudo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet risus in nulla accumsan placerat at a turpis. Sed porttitor, felis id dictum porta, quam ligula faucibus diam, vitae convallis mauris tellus non velit. Vivamus id tempus turpis. Vivamus dolor diam, elementum ut vestibulum vel, rutrum ut libero. Aenean eget ornare mauris, nec maximus nunc. Suspendisse ornare erat id eleifend fringilla. Aenean in diam leo. Duis vehicula non sem eget posuere. Integer quis efficitur tellus, quis suscipit tellus. Sed faucibus eu orci ac sagittis. Nam pretium, dui at semper euismod, nibh nisi aliquam urna, quis varius enim enim vel ligula. Sed quis nulla vitae lorem congue fermentum in sit amet eros. Sed purus lacus, rhoncus non turpis ac, consequat faucibus est. Sed molestie facilisis consectetur.

    Mauris viverra quis tortor et euismod. Curabitur finibus faucibus turpis. Fusce neque justo, pulvinar quis faucibus a, commodo facilisis tortor. Proin nunc magna, hendrerit vitae viverra quis, interdum ac augue. Integer ut dapibus lorem. Sed id elit varius, hendrerit odio eget, pretium sem. Nulla ut lectus imperdiet, egestas eros id, iaculis nulla. Etiam ut ultricies purus, a condimentum felis. Sed eleifend nulla a dolor dictum tempor.
    
    Fusce fringilla imperdiet mi sit amet malesuada. Integer egestas ante sed elit suscipit, id pulvinar sem tempus. Phasellus eu enim odio. Curabitur ultricies metus mollis viverra faucibus. Vestibulum a sem eget mauris efficitur lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tempus ornare aliquet. Curabitur ac justo lobortis, facilisis urna ut, posuere velit. Maecenas non nulla quam. Vivamus imperdiet lectus in erat eleifend pretium. Praesent venenatis et magna eu placerat. Vivamus imperdiet orci tortor, id rutrum lectus accumsan et. Integer quam leo, dictum eget venenatis sed, fermentum quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nunc congue consectetur egestas. Sed interdum nibh eget erat facilisis, eu bibendum nulla semper.
    
    Cras cursus, diam vel ultricies varius, nulla libero rutrum mauris, vel efficitur neque sem sit amet ex. Maecenas a convallis justo. Sed laoreet congue est, et rhoncus nibh molestie in. Phasellus posuere sem tincidunt nulla auctor pellentesque. Cras egestas augue eget felis porta tempor. Maecenas interdum nisi lacus, eu venenatis arcu egestas eu. Cras porttitor pretium est, quis gravida nibh. Ut ut efficitur eros. Aliquam quis vestibulum tortor, at euismod velit. Aenean ac nisl purus. Aliquam consectetur tortor ac purus iaculis iaculis. Suspendisse potenti. Fusce arcu ligula, gravida eget lorem ac, hendrerit ultrices nisl. Phasellus tincidunt scelerisque elit. Vivamus sagittis lobortis tincidunt. Vivamus convallis, tortor nec tincidunt venenatis, felis tortor suscipit justo, et lobortis quam lacus et felis.
    
    Quisque interdum tincidunt velit, quis pellentesque sem. Quisque porta nibh at felis malesuada feugiat in accumsan lorem. Donec interdum enim vel velit rutrum, ut condimentum nulla tristique. Praesent a molestie lectus. Aliquam nec velit eu metus malesuada ullamcorper sed sit amet tellus. Ut molestie eget leo tempus elementum. Pellentesque et velit felis. Phasellus efficitur felis ipsum, eu blandit nisl auctor et.`
    
    noticia.dataEHora = new Date();
    noticia.imagemDestaque = 'https://intranet.mp.rn.gov.br/Image_noticia.ashx?ID=274669';
    noticia.tipo = Noticia.TIPO_NOTICIA;

    noticia.listaDeTags.push("membros");
    noticia.listaDeTags.push("servidores");
    noticia.listaDeTags.push("sede");
    
    this.noticias.push(noticia);

    noticia = new Noticia();
    noticia.titulo  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    noticia.resumo = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
    noticia.conteudo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet risus in nulla accumsan placerat at a turpis. Sed porttitor, felis id dictum porta, quam ligula faucibus diam, vitae convallis mauris tellus non velit. Vivamus id tempus turpis. Vivamus dolor diam, elementum ut vestibulum vel, rutrum ut libero. Aenean eget ornare mauris, nec maximus nunc. Suspendisse ornare erat id eleifend fringilla. Aenean in diam leo. Duis vehicula non sem eget posuere. Integer quis efficitur tellus, quis suscipit tellus. Sed faucibus eu orci ac sagittis. Nam pretium, dui at semper euismod, nibh nisi aliquam urna, quis varius enim enim vel ligula. Sed quis nulla vitae lorem congue fermentum in sit amet eros. Sed purus lacus, rhoncus non turpis ac, consequat faucibus est. Sed molestie facilisis consectetur.

    Mauris viverra quis tortor et euismod. Curabitur finibus faucibus turpis. Fusce neque justo, pulvinar quis faucibus a, commodo facilisis tortor. Proin nunc magna, hendrerit vitae viverra quis, interdum ac augue. Integer ut dapibus lorem. Sed id elit varius, hendrerit odio eget, pretium sem. Nulla ut lectus imperdiet, egestas eros id, iaculis nulla. Etiam ut ultricies purus, a condimentum felis. Sed eleifend nulla a dolor dictum tempor.
    
    Fusce fringilla imperdiet mi sit amet malesuada. Integer egestas ante sed elit suscipit, id pulvinar sem tempus. Phasellus eu enim odio. Curabitur ultricies metus mollis viverra faucibus. Vestibulum a sem eget mauris efficitur lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tempus ornare aliquet. Curabitur ac justo lobortis, facilisis urna ut, posuere velit. Maecenas non nulla quam. Vivamus imperdiet lectus in erat eleifend pretium. Praesent venenatis et magna eu placerat. Vivamus imperdiet orci tortor, id rutrum lectus accumsan et. Integer quam leo, dictum eget venenatis sed, fermentum quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nunc congue consectetur egestas. Sed interdum nibh eget erat facilisis, eu bibendum nulla semper.
    
    Cras cursus, diam vel ultricies varius, nulla libero rutrum mauris, vel efficitur neque sem sit amet ex. Maecenas a convallis justo. Sed laoreet congue est, et rhoncus nibh molestie in. Phasellus posuere sem tincidunt nulla auctor pellentesque. Cras egestas augue eget felis porta tempor. Maecenas interdum nisi lacus, eu venenatis arcu egestas eu. Cras porttitor pretium est, quis gravida nibh. Ut ut efficitur eros. Aliquam quis vestibulum tortor, at euismod velit. Aenean ac nisl purus. Aliquam consectetur tortor ac purus iaculis iaculis. Suspendisse potenti. Fusce arcu ligula, gravida eget lorem ac, hendrerit ultrices nisl. Phasellus tincidunt scelerisque elit. Vivamus sagittis lobortis tincidunt. Vivamus convallis, tortor nec tincidunt venenatis, felis tortor suscipit justo, et lobortis quam lacus et felis.
    
    Quisque interdum tincidunt velit, quis pellentesque sem. Quisque porta nibh at felis malesuada feugiat in accumsan lorem. Donec interdum enim vel velit rutrum, ut condimentum nulla tristique. Praesent a molestie lectus. Aliquam nec velit eu metus malesuada ullamcorper sed sit amet tellus. Ut molestie eget leo tempus elementum. Pellentesque et velit felis. Phasellus efficitur felis ipsum, eu blandit nisl auctor et.`
    
    noticia.dataEHora = new Date();
    noticia.imagemDestaque = 'https://intranet.mp.rn.gov.br/Image_noticia.ashx?ID=274670';
    noticia.tipo = Noticia.TIPO_COMUNICADO;

    noticia.listaDeTags.push("membros");
    noticia.listaDeTags.push("servidores");
    noticia.listaDeTags.push("sede");
    

    this.noticias.push(noticia);

    noticia = new Noticia();
    noticia.titulo  = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    noticia.resumo = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.';
    noticia.conteudo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet risus in nulla accumsan placerat at a turpis. Sed porttitor, felis id dictum porta, quam ligula faucibus diam, vitae convallis mauris tellus non velit. Vivamus id tempus turpis. Vivamus dolor diam, elementum ut vestibulum vel, rutrum ut libero. Aenean eget ornare mauris, nec maximus nunc. Suspendisse ornare erat id eleifend fringilla. Aenean in diam leo. Duis vehicula non sem eget posuere. Integer quis efficitur tellus, quis suscipit tellus. Sed faucibus eu orci ac sagittis. Nam pretium, dui at semper euismod, nibh nisi aliquam urna, quis varius enim enim vel ligula. Sed quis nulla vitae lorem congue fermentum in sit amet eros. Sed purus lacus, rhoncus non turpis ac, consequat faucibus est. Sed molestie facilisis consectetur.

    Mauris viverra quis tortor et euismod. Curabitur finibus faucibus turpis. Fusce neque justo, pulvinar quis faucibus a, commodo facilisis tortor. Proin nunc magna, hendrerit vitae viverra quis, interdum ac augue. Integer ut dapibus lorem. Sed id elit varius, hendrerit odio eget, pretium sem. Nulla ut lectus imperdiet, egestas eros id, iaculis nulla. Etiam ut ultricies purus, a condimentum felis. Sed eleifend nulla a dolor dictum tempor.
    
    Fusce fringilla imperdiet mi sit amet malesuada. Integer egestas ante sed elit suscipit, id pulvinar sem tempus. Phasellus eu enim odio. Curabitur ultricies metus mollis viverra faucibus. Vestibulum a sem eget mauris efficitur lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tempus ornare aliquet. Curabitur ac justo lobortis, facilisis urna ut, posuere velit. Maecenas non nulla quam. Vivamus imperdiet lectus in erat eleifend pretium. Praesent venenatis et magna eu placerat. Vivamus imperdiet orci tortor, id rutrum lectus accumsan et. Integer quam leo, dictum eget venenatis sed, fermentum quis felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta nunc congue consectetur egestas. Sed interdum nibh eget erat facilisis, eu bibendum nulla semper.
    
    Cras cursus, diam vel ultricies varius, nulla libero rutrum mauris, vel efficitur neque sem sit amet ex. Maecenas a convallis justo. Sed laoreet congue est, et rhoncus nibh molestie in. Phasellus posuere sem tincidunt nulla auctor pellentesque. Cras egestas augue eget felis porta tempor. Maecenas interdum nisi lacus, eu venenatis arcu egestas eu. Cras porttitor pretium est, quis gravida nibh. Ut ut efficitur eros. Aliquam quis vestibulum tortor, at euismod velit. Aenean ac nisl purus. Aliquam consectetur tortor ac purus iaculis iaculis. Suspendisse potenti. Fusce arcu ligula, gravida eget lorem ac, hendrerit ultrices nisl. Phasellus tincidunt scelerisque elit. Vivamus sagittis lobortis tincidunt. Vivamus convallis, tortor nec tincidunt venenatis, felis tortor suscipit justo, et lobortis quam lacus et felis.
    
    Quisque interdum tincidunt velit, quis pellentesque sem. Quisque porta nibh at felis malesuada feugiat in accumsan lorem. Donec interdum enim vel velit rutrum, ut condimentum nulla tristique. Praesent a molestie lectus. Aliquam nec velit eu metus malesuada ullamcorper sed sit amet tellus. Ut molestie eget leo tempus elementum. Pellentesque et velit felis. Phasellus efficitur felis ipsum, eu blandit nisl auctor et.`
    
    noticia.dataEHora = new Date();
    noticia.imagemDestaque = 'https://intranet.mp.rn.gov.br/Image_noticia.ashx?ID=274667';
    noticia.tipo = Noticia.TIPO_CAMPANHA;
    

    noticia.listaDeTags.push("membros");
    noticia.listaDeTags.push("servidores");
    noticia.listaDeTags.push("sede");

    this.noticias.push(noticia);

  }




}
