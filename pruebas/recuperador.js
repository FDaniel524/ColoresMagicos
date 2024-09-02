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

	/*document.write(name);*/

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

	var total = ser1 + ser2 + ser3 + ser4 + ser5 +ser6 - descuento;

	/*Almacenamos en Local Storage*/
	localStorage.setItem("nombre", name);
	localStorage.setItem("direccion", address);
	localStorage.setItem("correo", mail);
	localStorage.setItem("horaI", horaI);
	localStorage.setItem("horaF", horaF);
	localStorage.setItem("descuento", descuento);
	localStorage.setItem("total", total);
	localStorage.setItem("fecha", date);

	if (precio1!=0) 
	{
		localStorage.setItem("caballetes", precio1);
		localStorage.setItem("hora1", hora1);
	}

	if (precio2!=0) 
	{
		localStorage.setItem("pintacaritas", precio2);
		localStorage.setItem("hora2", hora2);
	}

	if (precio3!=0) 
	{
		localStorage.setItem("yesitos", precio3);
		localStorage.setItem("hora3", hora3);
	}

	if (precio4!=0) 
	{
		localStorage.setItem("caballetes_pintacaritas", precio4);
		localStorage.setItem("hora4", hora4);
	}

	if (precio5!=0) 
	{
		localStorage.setItem("pintacaritas_yesitos", precio5);
		localStorage.setItem("hora5", hora5);
	}

	if (precio6!=0) 
	{
		localStorage.setItem("caballetes_yesitos", precio6);
		localStorage.setItem("hora6", hora6);
	}
}

function local_storage_recover()
{
	var nombre = localStorage.getItem("nombre");
	console.log(nombre);
}