var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var xi, yf;
var colorcito = "red", colorcito2 = "blue";

for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 * (l+1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    dibujarLinea(colorcito2, yi, 0, 300, xf);
    console.log("Linea " + l);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito2, 299, 1, 1, 1);
dibujarLinea(colorcito2, 299, 299, 299, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);//dibuja el primer punto
    lienzo.lineTo(xfinal, yfinal);//dibuja el punto final
    lienzo.stroke();//dibuja la linea
    lienzo.closePath();
}