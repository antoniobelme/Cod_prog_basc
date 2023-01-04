var teclas={UP:87, DOWN:83, LEFT:65, RIGHT:68};
var vp=document.getElementById("villaImagen");
var papel=vp.getContext("2d");
var cantidad=aleatorio(1,5);
var vaca={url:"vaca1.png",cargaOk:false}
var cerdo={url:"cerdo1.png",cargaOk:false}
var cerdoM={url:"cerdo1.png",cargaOk:false}
var pollo={url:"pollo1.png",cargaOk:false}
var fondo={url:"villa.jpeg",cargaOk:false}
var xcerdoM=250;
var ycerdoM=250;

var listaVacaX = [];
var listaVacaY = [];
var listaCerdoX = [];
var listaCerdoY = [];
var listaPolloX = [];
var listaPolloY = [];
var listaCerdoMX = [];
var listaCerdoMY = [];

document.addEventListener("keydown", movimientoTeclado);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVaca);

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

cerdoM.imagen=new Image();
cerdoM.imagen.src=cerdoM.url;
cerdoM.imagen.addEventListener("load",cargarCerdoM);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

fondo.imagen= new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

function mantenerPocisionVaca()
{
    if (fondo.cargaOk==true)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOk==true)
    {
        for(var v=0;v<cantidad;v++)
        {
            papel.drawImage(vaca.imagen,listaVacaX[v],listaVacaY[v]);
        }        
    }
    if (cerdo.cargaOk==true)
    {
        for(var v=0;v<cantidad;v++)
        {
            papel.drawImage(cerdo.imagen,listaCerdoX[v],listaCerdoY[v]);
        }        
    }
    if (pollo.cargaOk==true)
    {
        for(var v=0;v<cantidad;v++)
        {
            papel.drawImage(pollo.imagen,listaPolloX[v],listaPolloY[v]);
        }        
    }
    if (pollo.cargaOk==true)
    {
        for(var v=0;v<cantidad;v++)
        {
            papel.drawImage(pollo.imagen,listaPolloX[v],listaPolloY[v]);
        }        
    }
    if (cerdoM.cargaOk==true)
    {       
        papel.drawImage(cerdoM.imagen,listaCerdoMX[0],listaCerdoMY[0]);             
    }
}

function dibujar()
{
    if (fondo.cargaOk==true)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if (vaca.cargaOk==true)
    {        
        for(var v=0;v<cantidad;v++)
        {
            var x = aleatorio(0,8.5)*60;
            var y = aleatorio(0,8.5)*60;
            papel.drawImage(vaca.imagen,x,y);
            listaVacaX[v] = x;
            listaVacaY[v]= y;
        }
    }
    if (cerdo.cargaOk)
    {        
        for(var v=0;v<cantidad;v++)
        {
            var x = aleatorio(1,8.5)*60;
            var y = aleatorio(1,8.5)*60;
            papel.drawImage(cerdo.imagen,x,y);
            listaCerdoX[v]=x;
            listaCerdoY[v]=y;
        }  
    }
    if (pollo.cargaOk)
    {        
        for(var v=0;v<cantidad;v++)
        {
            var x = aleatorio(2,8.5)*60;
            var y = aleatorio(2,8.5)*60;
            papel.drawImage(pollo.imagen,x,y);
            listaPolloX[v]=x;
            listaPolloY[v]=y;
        }   
    }
    if (cerdoM.cargaOk)
    {
        papel.drawImage(cerdoM.imagen,xcerdoM,ycerdoM);
    }   
}

function cargarFondo()
{
    fondo.cargaOk=true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOk=true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOk=true;
    dibujar();
}

function cargarCerdoM()
{
    cerdoM.cargaOk=true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOk=true;
    dibujar();
}

function aleatorio(min,max)
{
    var resultado;
    resultado = Math.floor(Math.random()*(max-min+1))+min;
    return resultado;
}

function movimientoTeclado(evento)
{
    var movimiento=10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            papel.drawImage(cerdoM.imagen,xcerdoM,ycerdoM);
            ycerdoM=ycerdoM-movimiento;
            listaCerdoMX[0]=xcerdoM;
            listaCerdoMY[0]=ycerdoM;
            mantenerPocisionVaca(); 
        break;
        case teclas.DOWN:
            papel.drawImage(cerdoM.imagen,xcerdoM,ycerdoM);
            ycerdoM=ycerdoM+movimiento; 
            listaCerdoMX[0]=xcerdoM;
            listaCerdoMY[0]=ycerdoM; 
            mantenerPocisionVaca();         
        break;
        case teclas.LEFT:
            papel.drawImage(cerdoM.imagen,xcerdoM,ycerdoM);
            xcerdoM=xcerdoM-movimiento; 
            listaCerdoMX[0]=xcerdoM;
            listaCerdoMY[0]=ycerdoM; 
            mantenerPocisionVaca();          
        break;
        case teclas.RIGHT:
            papel.drawImage(cerdoM.imagen,xcerdoM,ycerdoM);
            xcerdoM=xcerdoM+movimiento; 
            listaCerdoMX[0]=xcerdoM;
            listaCerdoMY[0]=ycerdoM;
            mantenerPocisionVaca();          
        break;
        default:
            console.log(evento);
        break;
    }
}

