var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click", dibujoPorClick);//para ponerle un evento a un objeto obtenido de un html

var d = document.getElementById("dibujito");
var ancho = d.width;//para obtener el ancho del canvas y guardarlo en una variable llamada ancho
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);//dibuja el primer punto
    lienzo.lineTo(xfinal, yfinal);//dibuja el punto final
    lienzo.stroke();//dibuja la linea
    lienzo.closePath();
}

function dibujoPorClick()
{
    var x = parseInt(texto.value);//para obtener el valor que le usuario escribe en el cuadro de texto y pasarlo al tipo INT 
    var lineas = 30;
    var l = 0;
    var yi, xf;
    var colorcito = "red", colorcito2 = "blue";
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l+1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        dibujarLinea(colorcito2, yi, 0, 300, xf);
        console.log("Linea " + l);
    }

    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
    dibujarLinea(colorcito2, 299, 1, 1, 1);
    dibujarLinea(colorcito2, 299, 299, 299, 1);
}