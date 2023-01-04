var cc=document.getElementById("nombreCliente");
var nce=document.getElementById("numeroCedula");
var co=document.getElementById("ciudadOrigen");
var cd=document.getElementById("ciudadDestino");
var hv=document.getElementById("horaVuelo");
var p=document.getElementById("puestos");
var vp = document.getElementById("verPuestos");
vp.addEventListener("click", puestosDisponibles);
var ct = document.getElementById("comprarTiquetes");
ct.addEventListener("click", venderTiquetes);
var r=document.getElementById("Resetear" );
r.addEventListener("click", borrarDatos);
var nombreCliente, numeroCedula, ciudadOrigen, ciudadDestino, horaVuelo, puestos, capMax, puestosValidos, puestoValidado;
var xPuesto=0;
//contador
var puestosComVueloUno=[];
var puestosComVueloDos=[];
var puestosComVueloTres=[];
//almacenarInfo
var vueloUno=[];
var vueloDos=[];
var vueloTres=[];
//
var puestosVuelo=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];


function puestosDisponibles()
{
    capMax=30;
    puestos=p.value;
    horaVuelo=parseInt(hv.value);
    switch(horaVuelo)
    {
        case 1:
            for(i=0;i<puestos;i++)
            {
                puestosComVueloUno.push(1);
            }
            if(puestosComVueloUno.length<=capMax)
            {
                vueloUno.push(true);
                parrafo1.innerHTML+="Cantidad de puestos Solicitados: " + puestos + "<hr />";
                parrafo1.innerHTML+="Cantidad de puestos disponibles: " + (capMax-puestosComVueloUno.length)+" <hr />";
            }
            else
            {
                vueloUno.push(false);
                parrafo1.innerHTML+="Cantidad de puestos Solicitados: " + puestos + "<hr />";
                parrafo1.innerHTML+="Cantidad de puestos No disponibles" + "<hr />";
            }  
        break;
        case 2:
            for(i=0;i<puestos;i++)
            {
                puestosComVueloDos.push(1);
            }
            if(puestosComVueloDos.length<=capMax)
            {
                vueloDos.push(true);
                parrafo1.innerHTML+="Cantidad de puestos Solicitados: " + puestos + "<hr />";
                parrafo1.innerHTML+="Cantidad de puestos disponibles: " + (capMax-puestosComVueloDos.length)+" <hr />";
            }
            else
            {
                vueloDos.push(false);
                parrafo1.innerHTML+="Cantidad de puestos Solicitados: " + puestos + "<hr />";
                parrafo1.innerHTML+="Cantidad de puestos No disponibles" + "<hr />";
            }
        break;
        case 3:
            for(i=0;i<puestos;i++)
            {
                puestosComVueloTres.push(1);
            }
            if(puestosComVueloTres.length<=capMax)
            {
                vueloTres.push(true);
                parrafo1.innerHTML+="Cantidad de puestos Solicitados: " + puestos + "<hr />";
                parrafo1.innerHTML+="Cantidad de puestos disponibles: " + (capMax-puestosComVueloTres.length)+" <hr />";
            }
            else
            {
                vueloTres.push(false);
                parrafo1.innerHTML+="Cantidad de puestos Solicitados: " + puestos + "<hr />";
                parrafo1.innerHTML+="Cantidad de puestos No disponibles" + "<hr />";
            } 
        break;
    }  
}

puestoValidado=puestosDisponibles();

function venderTiquetes()
{
    puestos=parseInt(p.value);
    if (vueloUno[vueloUno.length-1]==true)
    {
        for(var i=0;i<puestos;i++)
        {
            parrafo2.innerHTML+="Puesto: " + puestosVuelo[xPuesto] + " del vuelo 08:00, comprado <hr />";   
            xPuesto+=1;  
        }
    }
    
    
}

function borrarDatos()
{
    puestos=p.value;
    horaVuelo=parseInt(hv.value);
    switch(horaVuelo)
    {
        case 1:
            for(i=0;i<puestos;i++)
            {
                puestosComVueloUno.pop();
            }
        break;
        case 2:
            for(i=0;i<puestos;i++)
            {
                puestosComVueloDos.pop();
            }
        break;
        case 3:
            for(i=0;i<puestos;i++)
            {
                puestosComVueloTres.pop();
            } 
        break;
    } 
}