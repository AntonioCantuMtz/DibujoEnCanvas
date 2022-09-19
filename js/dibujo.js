var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
var texto2 = document.getElementById("texto_lineas2");
var boton2 = document.getElementById("boton2");
var limpiar = document.getElementById("boton_limpiar");

//Eventos
boton.addEventListener("click", dibujoPorClick);//para ponerle un evento a un objeto obtenido de un html
limpiar.addEventListener("click", reset);
boton2.addEventListener("click", dibujoPorClick2);

var d = document.getElementById("dibujito");
var ancho = d.width;//para obtener el ancho del canvas y guardarlo en una variable llamada ancho
var lienzo = d.getContext("2d");
 
var lineas = 30;
var yi, xf;
var colorcito = "white", colorcito2 = "red";


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);//dibuja el primer punto
    lienzo.lineTo(xfinal, yfinal);//dibuja el punto final
    lienzo.stroke();//dibuja la linea
    lienzo.closePath();
}

function reset()
{
    lienzo.clearRect(0, 0, 300, 300);
}

function dibujoPorClick()
{    
    var x1 = parseInt(texto.value);//para obtener el valor que le usuario escribe en el cuadro de texto y pasarlo al tipo INT
    var espacio1 = ancho / x1;

    for(l = 0; l < lineas; l++)
    {
        yi = espacio1 * l;
        xf = espacio1 * (l+1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log("Lineas 1" + l);
    }
    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);
}

function dibujoPorClick2()
{   
    var x2 = parseInt(texto2.value);
    var espacio2 = ancho / x2;

    for(l = 0; l < lineas; l++)
    {
        yi = espacio2 * l;
        xf = espacio2 * (l+1);
        dibujarLinea(colorcito2, yi, 0, 300, xf);
        console.log("Lineas 2" + l);
    }
    dibujarLinea(colorcito2, 299, 1, 1, 1);
    dibujarLinea(colorcito2, 299, 299, 299, 1);
}