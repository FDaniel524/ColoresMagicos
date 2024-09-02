function getPrecios()
{
    var costo = document.getElementById("sitiofecha").value;

	/*Habilitamos los checkbox*/
	document.getElementById("s1").disabled=false;
	document.getElementById("s2").disabled=false;
	document.getElementById("s3").disabled=false;
	document.getElementById("s4").disabled=false;
	document.getElementById("s5").disabled=false;
	document.getElementById("s6").disabled=false;

	/*Deshabilitar enviar en caso de reszet de pedidos en el paquete*/
	document.getElementById("enviar").disabled=true;

	//Paquete dentro del área
	if (costo == 1) 
	{
		document.getElementById("paq1").value=800;
		document.getElementById("paq2").value=500;
		document.getElementById("paq3").value=700;
		document.getElementById("paq4").value=1200;
		document.getElementById("paq5").value=1000;
		document.getElementById("paq6").value=1400;
	}

	//Paquete fuera del área
	else if (costo == 2) 
	{
		document.getElementById("paq1").value=1200;
		document.getElementById("paq2").value=800;
		document.getElementById("paq3").value=900;
		document.getElementById("paq4").value=1800;
		document.getElementById("paq5").value=1500;
		document.getElementById("paq6").value=1900;
	}
	/*Fijamos cero pesos por defecto*/
	else
	{
		var p1 = 0;
		var p2 = 0;
		var p3 = 0;
		var p4 = 0;
		var p5 = 0;
		var p6 = 0;
	}
    
    /*Deshabilitamos en caso de haber elegido paquetes para resetear precios y evitar bugs*/
    document.getElementById("s1").checked=false;
	document.getElementById("s2").checked=false;
	document.getElementById("s3").checked=false;
	document.getElementById("s4").checked=false;
	document.getElementById("s5").checked=false;
	document.getElementById("s6").checked=false;

	document.getElementById("h1").disabled=true;
	document.getElementById("h2").disabled=true;
	document.getElementById("h3").disabled=true;
	document.getElementById("h4").disabled=true;
	document.getElementById("h5").disabled=true;
	document.getElementById("h6").disabled=true;
}