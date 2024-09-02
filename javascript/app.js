var getData = function()
{
	/*Generador de IMG*/
	var can = document.getElementById("micanvas");
	var ctx = can.getContext("2d");
	var img = document.getElementById("miImg");

	ctx.drawImage(img,10,80);
	ctx.lineWidth = 1;
	ctx.font = "36px Arial";
	ctx.fillStyle = "black";
	ctx.fillText("Nombre: " + name,50,500);
	ctx.fillText("Dirección: " + address,50,560);
}