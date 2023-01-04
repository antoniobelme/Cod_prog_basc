var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("boton");
boton.addEventListener("click",dibujoPorClic);


var d=document.getElementById("dibujito");
var An=d.width;
alert(An);
var lienzo=d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoPorClic()
{
                                                    // .value permite obtener el valor que esta dentro de la variable
    var lineas=parseInt(texto.value);               //parseInt permite convertir ese valor en numero entero
    var L=0;
    var yi, xf, xi, yff;
    var VL=An/texto.value;;
    var yf=300;
    var yii=300;

    while(L<lineas)
    {
        yi=VL*L;
        xf=VL*(L+1);
        dibujarLinea("grey",0, yi, xf, 300);
        console.log("linea" +L);
        L=L+1;
    }
    for (L=0;L<lineas;L++)
    {
        xi=VL*L;
        yf=yf-VL;
        dibujarLinea("grey",xi, 300, 300, yf);
        console.log("linea" +L);

    }
    for (L=0;L<lineas;L++)
    {
        xi=VL*L;
        yff=VL*(L+1);
        dibujarLinea("grey",xi, 0, 300, yff);
        console.log("linea" +L);

    }
    for (L=0;L<lineas;L++)
    {
        yii=yii-VL;
        xf=VL*(L+1); 
        dibujarLinea("grey", 0, yii, xf, 0);
        console.log("linea" +L);
    }

    dibujarLinea("grey",1, 1, 1, 300);
    dibujarLinea("grey",0, 300, 300, 300);
    dibujarLinea("grey",300, 300, 300, 1);
    dibujarLinea("grey",1, 1, 300, 1);
                                
}