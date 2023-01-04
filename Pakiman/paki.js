var imagenes = [];
imagenes["Cauchin"]="vaca1.png";
imagenes["Pokacho"]="pollo1.png";
imagenes["Tocinauro"]="cerdo1.png";

class Pakiman
{
    constructor(n,v,a)
    {
        this.imagen=new Image();
        this.nombre=n;
        this.vida=v;
        this.ataque=a;
        this.imagen.src=imagenes[this.nombre];
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<br />");
        document.write("</p><hr />");
    }
}

var coleccion =[];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

for(var i of coleccion)//este ciclo recorre la cantidad de veces que el objeto esta dentro del arrays
{
    i.mostrar();
}
