var cuponera = function()
{
	var cupon = document.getElementById("codigo").value;
	console.log("codigo es: " + cupon);
	document.getElementById("descuento").disabled=false;
}

function formulario(campo)
{
    if(campo == 1)
    {
       var valor = document.getElementById("nombre").value;
        if(valor != '')
        {
            document.getElementById("lab-nombre").className = "fijo";
        }

        else
        {
            document.getElementById("lab-nombre").className = "interno";
        }
    }
    else if(campo == 2)
    {
        var valor = document.getElementById("direccion").value;
        if(valor != '')
        {
            document.getElementById("lab-direccion").className = "fijo";
        }

        else
        {
            document.getElementById("lab-direccion").className = "interno";
        }       
    }
    else if(campo == 3)
    {
        var valor = document.getElementById("correo").value;
        if(valor != '')
        {
            document.getElementById("lab-correo").className = "fijo";
        }

        else
        {
            document.getElementById("lab-correo").className = "interno";
        }  
    }
    else
    {
        alert("Unexpected Error");
    }
}