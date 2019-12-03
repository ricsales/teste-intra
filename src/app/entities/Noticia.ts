
/**
 * Classe que representa uma notícia da intranet
 */
export class Noticia {
    titulo: String;
    resumo: String;
    tipo: Number;
    
    /**
     * a notícia ou tem uma imagem de destaque ou
     * o código de um vídeo do youtube, ou nenhum dos dois
     */
    imagemDestaque: String;
    codigoVideoYouTube: String;
    
    conteudo: String;
    
    /**Data e hora do registro da notícia */
    dataEHora: Date;

    
    numeroCurtidas : number;
    numeroCompartilhamentos: number;

    public static TIPO_NOTICIA = 1;
    public static TIPO_COMUNICADO = 2;
    public static TIPO_CAMPANHA = 3;

    listaDeTags : String[] = [];
}