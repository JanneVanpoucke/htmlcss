class Mens{
    constructor(ogen, neus){
        this.ogen = ogen;
        this.neus = neus;
    }
    get naam(){
        return this.naam;
    }
    set naam(value){
        this.naam = uppercase(value);
    }
}
class Kind extends Mens{
    constructor(ogen,neus, benen, armen){
        super(ogen, neus);
        this.benen = benen;
        this.armen = armen;
    }
}
class Volwassene extends Mens{
    constructor(ogen,neus, benen, armen, voeten){
        super(ogen,neus, benen,armen);
        this.voeten = voeten;
    }
}
var kind1 = new Kind('blauw','dik','o-benen','geen');
var volwassene1 = new Volwassene('rood','geen','twee','1', '2');
volwassene1.neus = '1';