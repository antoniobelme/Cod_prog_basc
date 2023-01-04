var cuadro=document.getElementById("Area_Dibujo");
var lienzo=cuadro.getContext("2d");
document.addEventListener("mousedown",dibujarMouse);
document.addEventListener("mousemove",dibujarMouse);
//document.addEventListener("mouseup",dibujarMouse);
var xi, yi;
var colorC="black";
dibujarLinea(colorC,1,299,299,299)
function dibujarMouse(evento)
{
    var xf=evento.layerX;
    var yf=evento.layerY;
    //console.log(evento)
    if(evento.buttons==1)
    {
        dibujarLinea(colorC,xi,yi,xf,yf)
        xi=xf; //estas variables le dan un punto de partida a la linea
        yi=yf; //adquiriendo el valor de xf yf
    }
    else
    {
        xi=xf; 
        yi=yf;
    }
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.lineWidth=1;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}