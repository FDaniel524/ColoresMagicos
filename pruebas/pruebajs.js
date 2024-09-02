var getData = function()
{
	/*Generador de IMG
	var can = document.getElementById("micanvas");
	var ctx = can.getContext("2d");
	var img = document.getElementById("miImg");*/
	nombre = document.getElementById("nombre");
	console.log("nombre es: " + nombre);
		/*ctx.drawImage(img,10,80);
		ctx.lineWidth = 1;
		ctx.font = "48px Arial";
		ctx.fillStyle = "red";
		ctx.fillText("prueba 1",50,400);
		ctx.fillText("prueba 2",50,460);*/
}

function getFecha()
{
	var fecha = document.getElementById("fecha").value;
	var diaM = fecha[8] + fecha[9];
	var anio = fecha[0] + fecha[1] + fecha[2] + fecha[3];
	var fecha = new Date(fecha);
	var dia = fecha.getDay();
	var mes = fecha.getMonth();
	if (dia == 0) 
	{
		var dia ="Lunes";
	}
	else if (dia ==1)
	{
		var dia ="Martes";
	}
	else if (dia ==2)
	{
		var dia ="Miercoles";
	}
	else if (dia ==3)
	{
		var dia ="Jueves";
	}
	else if (dia ==4)
	{
		var dia ="Viernes";
	}
	else if (dia ==5)
	{
		var dia ="Sabado";
	}
	else
	{
		var dia = "Domingo";
	}
	console.log(dia);

	if (mes == 0) 
	{
		mes = "Enero";
	}
	else if (mes == 1) 
	{
		mes = "Febrero";
	}
	else if (mes == 2) 
	{
		mes = "Marzo";
	}
	else if (mes == 3) 
	{
		mes = "Abril";
	}
	else if (mes == 4) 
	{
		mes = "Mayo";
	}
	else if (mes == 5) 
	{
		mes = "Junio";
	}
	else if (mes == 6) 
	{
		mes = "Julio";
	}
	else if (mes == 7) 
	{
		mes = "Agosto";
	}
	else if (mes == 8) 
	{
		mes = "Septiembre";
	}
	else if (mes == 9) 
	{
		mes = "Octubre";
	}
	else if (mes == 10) 
	{
		mes = "Noviembre";
	}
	else 
	{
		mes = "Diciembre";
	}
	console.log(dia + " " + diaM + " " + mes +  " " + anio);
}