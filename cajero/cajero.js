var imagenes = [];
imagenes[100]="100.jpeg";
imagenes[50]="50.jpeg";
imagenes[20]="20.jpeg";
imagenes[10]="10.png"

class Billete
{
    constructor(v,c,)
    {
        this.valor=v;
        this.cantidad=c;
        this.imagen=new Image();
        this.imagen.src=imagenes[this.valor];
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
    }
}
var dineroRetirado=[];
var entregado=[];
var billetesEntregado=[];
var sumaCaja=[];
var dineroRetirado=[];
var dinero;
var mdiez;
var suma=0;
var sumaR=0;
var sumaRetirado=0;
var div=0;
var papeles=0;
var t=document.getElementById("dinero");
var resultado = document.getElementById("resultado");
var carga = document.getElementById("carga"); 
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var t=document.getElementById("dinero");

var caja=[];
caja.push(new Billete(100,10));
caja.push(new Billete(50,10));
caja.push(new Billete(20,10));
caja.push(new Billete(10,10));

function mostrarCaja()
{
    for( var r of caja)
    {
        var totalC=0;
        totalC += r.valor * r.cantidad;
        sumaCaja.push(totalC);
    }
    for (var i=0;i<sumaCaja.length;i++)
    {
        suma+=sumaCaja[i];
    }
    return suma;
}
var sumaT=mostrarCaja();

function entregarDinero()
{
    dinero=parseInt(t.value);
    if (dinero>sumaT)
    {
        resultado.innerHTML= "Soy un cajero pobre, no tengo la cantidad de dinero que necesitas: " + dinero + "<hr />";
    }
    if (dinero%10!=0)
    {
        resultado.innerHTML= "Digita un valor multiplo de 10 " + "<hr />";
    }
    else if (dinero<sumaT)
    {
        dineroRetirado.push(dinero);
        for(var bi of caja)
        {
            if (dinero>0)
            {
                div=Math.floor(dinero/bi.valor);
                if (div>bi.cantidad)
                {
                    papeles=bi.cantidad;
                }
                else 
                {
                    papeles=div;
                }
                entregado.push(new Billete(bi.valor,papeles));
                for (var i=0;i<papeles;i++)
                {
                    billetesEntregado.push(new Billete(bi.valor,1));
                }
                dinero=dinero-(bi.valor*papeles);
            }
        }
        resultado.innerHTML = resultado.innerHTML + " Retira tu dinero: " + "<br />";
        for(var x of billetesEntregado)
        {
            carga.innerHTML = x.mostrar();    
        }
    }
   
}






