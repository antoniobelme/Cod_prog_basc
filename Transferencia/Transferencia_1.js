//cajas de texto
var cuentacliente, saldo, cuentaDestino, transferencia, bancoDestino, nombreCliente, usuario, hora, formulario;
var cc = document.getElementById("cuentaCliente");
var s = document.getElementById("saldo");
var cd = document.getElementById("cuentaDestino");
var t = document.getElementById("transferencia");
var bd = document.getElementById("bancoDestino");
var nc = document.getElementById("nombreCliente");
var h = document.getElementById("hora");
var b = document.getElementById("transferir");
var f=document.getElementById("formulario");
b.addEventListener("click", transferirDinero);

function transferirDinero()
{
    usuario=false;
    nombreCliente=String(nc.value)
    cuentacliente=String(cc.value);
    saldo=parseInt(s.value);
    cuentaDestino=String(cd.value);
    transferencia=parseInt(t.value);
    bancoDestino=String(bd.value);
    hora=parseInt(h.value);
    if(cuentacliente.length == 8)
    {
        usuario=true;
        if(usuario==true)
        {
            parrafo1.innerHTML= "El cliente " + nombreCliente + " esta verificado. <hr />";
            if(saldo>transferencia && cuentaDestino.length==8 && hora>1 && hora<=9 && hora!=5)
            {
                if (bancoDestino=="banco uno")
                {
                    parrafo1.innerHTML+= "El valor de su transacción ha sido: " + transferencia + " a la cuenta: " + cuentaDestino + " del Banco: " + bancoDestino + "<hr />";
                    parrafo1.innerHTML+= "El Costo de su transacción ha sido: $0 <hr />";
                    parrafo1.innerHTML+= "si saldo es: " + (saldo-transferencia) + "<hr />";
                }
                else
                {
                    saldo-=100;
                    parrafo1.innerHTML+= "El valor de su transacción ha sido: " + transferencia + " a la cuenta: " + cuentaDestino + " del Banco: " + bancoDestino + "<hr />";
                    parrafo1.innerHTML+= "El Costo de su transacción ha sido: $100 <hr />";
                    parrafo1.innerHTML+= "Su saldo es: " + (saldo-transferencia) + "<hr />";
                }
            }
            else
            {
                parrafo1.innerHTML= "Valor de transferencia invalido o Cuenta de destino invalida <hr />";
            }
        }
        else
        {
            parrafo1.innerHTML= "El cliente " + cliente.nombre + " NO esta verificado. <hr />";
        }
    }
    else
    {
        usuario=false;
    }
    formulario.reset();
}
