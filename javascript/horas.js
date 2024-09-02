var getOpcion = function()
{   
	var p1 = document.getElementById("s1").checked;
	var p2 = document.getElementById("s2").checked;
	var p3 = document.getElementById("s3").checked;
	var p4 = document.getElementById("s4").checked;
	var p5 = document.getElementById("s5").checked;
	var p6 = document.getElementById("s6").checked;

	if (p1 == false) 
	{
		document.getElementById("h1").disabled=true;
	}
	else
	{
		document.getElementById("h1").disabled=false;
		document.getElementById("enviar").disabled=false;

	}

	if (p2 == false) 
	{
		document.getElementById("h2").disabled=true;
	}
	else
	{
		document.getElementById("h2").disabled=false;
		document.getElementById("enviar").disabled=false;

	}

	if (p3 == false) 
	{
		document.getElementById("h3").disabled=true;
	}
	else
	{
		document.getElementById("h3").disabled=false;
		document.getElementById("enviar").disabled=false;
	}

	if (p4 == false) 
	{
		document.getElementById("h4").disabled=true;
	}
	else
	{
		document.getElementById("h4").disabled=false;
		document.getElementById("enviar").disabled=false;
	}

	if (p5 == false) 
	{
		document.getElementById("h5").disabled=true;
	}
	else
	{
		document.getElementById("h5").disabled=false;
		document.getElementById("enviar").disabled=false;
	}

	if (p6 == false) 
	{
		document.getElementById("h6").disabled=true;
	}
	else
	{
		document.getElementById("h6").disabled=false;
		document.getElementById("enviar").disabled=false;
	}

	if (p1==false && p2==false && p3==false && p4==false && p5==false && p6==false) 
	{
		document.getElementById("enviar").disabled=true;
	}
}