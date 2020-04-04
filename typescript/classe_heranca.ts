class classePai {
    protected titulo : string = 'CLASSE PAI';

    getAlgumaCoisa() : string {
        return 'Loga alguma coisa';
    };

}

export default class classeFilha extends classePai {
    getTitulo() : string {
        return this.titulo;
    }
}