function local_storage()
{
	/*var nombre = "juan";
	var edad = 23; 
	localStorage.setItem("nombre", nombre);
	localStorage.setItem("Edad", edad);*/
	
	/*Recibiendo datitos*/
	var name = document.getElementById("nombre").value;
	var address = document.getElementById("direccion").value;
	var mail = document.getElementById("correo").value;
	var horaI = document.getElementById("horaI").value;
	var horaF = document.getElementById("horaF").value;
	var date = document.getElementById("fecha").value;
	var descuento = document.getElementById("descuento").value;
    var anticipo = document.getElementById("anticipo").value;

	/*Modificacion de hora inicio y final*/
	horaI = codhoras(horaI);	
	horaF = codhoras(horaF);	

	/*Inicia modificacion de fecha*/
	var date2 = date;
	var diaM = date[8] + date[9];
	var anio = date[0] + date[1] + date[2] + date[3];
	var fecha = new Date(date);
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
	date = dia + " " + diaM + " de " + mes + " de " + anio;
	/*termina modificacion de fecha*/

	var p1 = document.getElementById("s1").checked;
	var p2 = document.getElementById("s2").checked;
	var p3 = document.getElementById("s3").checked;
	var p4 = document.getElementById("s4").checked;
	var p5 = document.getElementById("s5").checked;
	var p6 = document.getElementById("s6").checked;

	if (p1 == false) 
	{
		document.getElementById("h1").disabled=true;
		var precio1 = 0;
		var hora1 = 0;
	}
	else
	{
		document.getElementById("h1").disabled=false;
		var precio1 = document.getElementById("paq1").value;
		var hora1 = document.getElementById("h1").value;
	}

	if (p2 == false) 
	{
		document.getElementById("h2").disabled=true;
		var precio2 = 0;
		var hora2 = 0;
	}
	else
	{
		document.getElementById("h2").disabled=false;
		var precio2 = document.getElementById("paq2").value;
		var hora2 = document.getElementById("h2").value;
	}

	if (p3 == false) 
	{
		document.getElementById("h3").disabled=true;
		var precio3 = 0;
		var hora3 = 0;
	}
	else
	{
		document.getElementById("h3").disabled=false;
		var precio3 = document.getElementById("paq3").value;
		var hora3 = document.getElementById("h3").value;
	}

	if (p4 == false) 
	{
		document.getElementById("h4").disabled=true;
		var precio4 = 0;
		var hora4 = 0;
	}
	else
	{
		document.getElementById("h4").disabled=false;
		var precio4 = document.getElementById("paq4").value;
		var hora4 = document.getElementById("h4").value;
	}

	if (p5 == false) 
	{
		document.getElementById("h5").disabled=true;
		var precio5 = 0;
		var hora5 = 0;
	}
	else
	{
		document.getElementById("h5").disabled=false;
		var precio5 = document.getElementById("paq5").value;
		var hora5 = document.getElementById("h5").value;
	}

	if (p6 == false) 
	{
		document.getElementById("h6").disabled=true;
		var precio6 = 0;
		var hora6 = 0;
	}
	else
	{
		document.getElementById("h6").disabled=false;
		var precio6 = document.getElementById("paq6").value;
		var hora6 = document.getElementById("h6").value;
	}

	/*Calculo de precio por cada paquete sea elegido o no*/
	var ser1 = precio1 * hora1;
	var ser2 = precio2 * hora2;
	var ser3 = precio3 * hora3;
	var ser4 = precio4 * hora4;
	var ser5 = precio5 * hora5;
	var ser6 = precio6 * hora6;

	var total = ser1 + ser2 + ser3 + ser4 + ser5 +ser6 - descuento - anticipo;

	/*Almacenamos en Local Storage*/
	localStorage.setItem("nombre", name);
	localStorage.setItem("direccion", address);
	localStorage.setItem("correo", mail);
	localStorage.setItem("horaI", horaI);
	localStorage.setItem("horaF", horaF);
	localStorage.setItem("descuento", descuento);
    localStorage.setItem("anticipo", anticipo);
	localStorage.setItem("fecha", date);
	localStorage.setItem("Fecha2", date2);

	localStorage.setItem("s1", precio1);
	localStorage.setItem("hora1", hora1);

	localStorage.setItem("s2", precio2);
	localStorage.setItem("hora2", hora2);

	localStorage.setItem("s3", precio3);
	localStorage.setItem("hora3", hora3);

	localStorage.setItem("s4", precio4);
	localStorage.setItem("hora4", hora4);

	localStorage.setItem("s5", precio5);
	localStorage.setItem("hora5", hora5);
	
	localStorage.setItem("s6", precio6);
	localStorage.setItem("hora6", hora6);
}

function local_storage_recover()
{
	var nombre = localStorage.getItem("nombre");
	var direccion = localStorage.getItem("direccion");
	var correo = localStorage.getItem("correo");
	var horaI = localStorage.getItem("horaI");
	var horaF = localStorage.getItem("horaF");
	var descuento = localStorage.getItem("descuento");
    var anticipo = localStorage.getItem("anticipo");
	var fecha = localStorage.getItem("fecha");
	var fechaaux = localStorage.getItem("Fecha2");

	/*Campos de servicio, horas y total de cada uno*/
	var precio1 = localStorage.getItem("s1");
	var hora1 = localStorage.getItem("hora1");
	var tot1 = precio1 * hora1;

	var precio2 = localStorage.getItem("s2");
	var hora2 = localStorage.getItem("hora2");
	var tot2 = precio2 * hora2;

	var precio3 = localStorage.getItem("s3");
	var hora3 = localStorage.getItem("hora3");
	var tot3 = precio3 * hora3;

	var precio4 = localStorage.getItem("s4");
	var hora4 = localStorage.getItem("hora4");
	var tot4 = precio4 * hora4;

	var precio5 = localStorage.getItem("s5");
	var hora5 = localStorage.getItem("hora5");
	var tot5 = precio5 * hora5;

	var precio6 = localStorage.getItem("s6");
	var hora6 = localStorage.getItem("hora6");
	var tot6 = precio6 * hora6;

    var subtotal = tot1 + tot2 + tot3 + tot4 + tot5 + tot6;
	var total = tot1 + tot2 + tot3 + tot4 + tot5 + tot6 - descuento - anticipo; 
	var x = nombre.length;
	var n2 = nombre[0];
	for (var i = 1; i < x; i++) 
	{
		if (nombre[i]==" ")
		{
			n2 = n2 + nombre[i+1];
		}
	} 
	
	for (var i = n2.length-1; i < 4; i++) 
	{
		if (n2.length<4)
		{
			n2 = n2 + "A";
		}
	}

	fecha2 ="";
	for (var i = 0; i < fechaaux.length; i++) 
	{
		if(fechaaux[i]!="-")
		{
			fecha2 = fecha2 + fechaaux[i];
		}
	}

	var aleatorio = Math.random() * (999 - 0);
	aleatorio = Math.trunc(aleatorio);
	
	var folio = n2[0] + n2[1] +fecha2 + n2[2] + aleatorio;
	
	/*Generador de IMG*/
	var can = document.getElementById("micanvas");
	var ctx = can.getContext("2d");
	var img = document.getElementById("miImg");

	ctx.drawImage(img,10,80);
	ctx.lineWidth = 1;
	ctx.font = "42px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Nombre: " + nombre,50,500);
	ctx.fillText("Dirección: " + direccion,50,560);
	ctx.fillText("E-mail: " + correo,50,620);
	ctx.fillText("Fecha: " + fecha,50,680);
	ctx.fillText("Inicio: " + horaI,50,740);
	ctx.fillText("Cierre: " + horaF,50,800);

	/*Detalle del pedido*/
	ctx.fillText("-------------------------------------------------------",50,860);
	ctx.fillText("Concepto										Precio				Hrs.				Subtotal",50,900);
	ctx.font = "24px Courier";
	pos_y = 940;
	if (precio1!=0) 
	{
		ctx.fillText(" Caballetes            " + precio1 + "        " + hora1 + "       $" + tot1 + ".00",50,pos_y);
		pos_y = pos_y + 50;
	}

	if (precio2!=0) 
	{
		ctx.fillText(" Pintacaritas          " + precio2 + "        " + hora2 + "       $" + tot2 + ".00",50,pos_y);
		pos_y = pos_y + 50;
	}

	if (precio3!=0) 
	{
		ctx.fillText(" Yesitos               " + precio3 + "        " + hora3 + "       $" + tot3 + ".00",50,pos_y);
		pos_y = pos_y + 50;
	}

	if (precio4!=0) 
	{
		ctx.fillText(" Caballetes           " + precio4 + "        " + hora4 + "       $" + tot4 + ".00",50,pos_y);
		pos_y = pos_y +30;
		ctx.fillText(" y pintacaritas",50,pos_y);
		pos_y = pos_y + 50;
	}

	if (precio5!=0) 
	{
		ctx.fillText(" Pintacaritas         " + precio5 + "        " + hora5 + "       $" + tot5 + ".00",50,pos_y);
		pos_y = pos_y +30;
		ctx.fillText(" y Yesitos",50,pos_y);
		pos_y = pos_y + 50;
	}

	if (precio6!=0) 
	{
		ctx.fillText(" Caballetes           " + precio6 + "        " + hora6 + "       $" + tot6 + ".00",50,pos_y);
		pos_y = pos_y +30;
		ctx.fillText(" y Yesitos",50,pos_y);
		pos_y = pos_y + 50;
	}
    ctx.fillText(" Subtotal:                               $" + subtotal + ".00 MXN",50,pos_y);	
	pos_y = pos_y + 30;
	ctx.fillText(" Anticipo:                               $" + anticipo + ".00 MXN",50,pos_y);	
	pos_y = pos_y + 30;	
    ctx.fillText(" Descuento:                               $" + descuento + ".00 MXN",50,pos_y);	
	pos_y = pos_y + 30;	
	ctx.fillText("                                        ------------",50,pos_y);
	pos_y = pos_y + 30;
	ctx.fillText(" Total:                                  $" + total + ".00 MXN",50,pos_y);
	
	pos_y = pos_y + 35;
	ctx.font = "42px Arial";
	ctx.fillText("-------------------------------------------------------",50,pos_y);
	
	ctx.font = "24px Courier";
	ctx.fillText("                    Folio: " + folio,300,1850);
	//localStorage.clear();
}

var codhoras = function(infin)
{
	infin2 = infin[0] + infin[1];
	var infin3 = parseInt(infin2);
	if(infin3>12)
	{
		infin2 = infin2 -12;
		infin2 = infin2 + infin[2] + infin[3] + infin[4] + " PM";
	}
	else
	{
		infin2 = infin + " AM";
	}
	return infin2;
}