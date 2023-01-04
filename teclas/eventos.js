var teclas={UP:38, DOWN:40, LEFT:37, RIGHT:39};
console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);
var cuadro=document.getElementById("Area_Dibujo");
var papel=cuadro.getContext("2d");
var x=100;
var y=100;

dibujarLinea("red",x,y,x,y,papel);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.lineWidth=3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarTeclado(evento)
{
    var ColorC="blue";
    var movimiento=10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(ColorC,x,y,x,y-movimiento,papel);
            y=y-movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(ColorC,x,y,x,y+movimiento,papel);
            y=y+movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(ColorC,x,y,x-movimiento,y,papel);
            x=x-movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(ColorC,x,y,x+movimiento,y,papel);
            x=x+movimiento;
        break;
        default:
            console.log(evento);
        break;
    }
}

