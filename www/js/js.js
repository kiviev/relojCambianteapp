
var hora, minuto, segundo;

var rojo=0, azul=0, verde=0;
var boolRojo=true;
var boolAzul=true;
var boolVerde=true;
var mesTexto;
var interval= setInterval(ejecutar,1000);
var reloj=document.getElementById('reloj');
var fecha=document.getElementById('fecha');
var tiempo={
	'diaSemana':'',
	'dia':'', 
	'mes': '', 
	'anyo': '', 
	'hora':'', 
	'minuto' : '', 
	'segundo':''
}



/****************************************

funciones

****************************************/
function ejecutar(){
	colorFondo();
	llenarDivs()
}
function cambiaMes(){
	switch(tiempo.mes){
		case '1':
		mesTexto='Enero';
		break;
		case '2':
		mesTexto='Febrero';
		break;
		case '3':
		mesTexto='Marzo';
		break;
		case '4':
		mesTexto='Abril';
		break;
		case '5':
		mesTexto='Mayo';
		break;
		case '6':
		mesTexto='Junio';
		break;
		case '7':
		mesTexto='Julio';
		break;
		case '8':
		mesTexto='Agosto';
		break;
		case '9':
		mesTexto='Septiembre';
		break;
		case '10':
		mesTexto='Octubre';
		break;
		case '11':
		mesTexto='Noviembre';
		break;
		case '12':
		mesTexto='Diciembre';
		break;
		default:
		console.log("mesTexto pasa por default");
	}

}
function llenarDivs(){
	cambiaMes();
	reloj.innerHTML=tiempo.hora + 'h ' + tiempo.minuto + 'min ' + tiempo.segundo + 'seg';
	fecha.innerHTML= tiempo.dia + ' de ' + mesTexto + ' de ' + tiempo.anyo;
}

function asignaVarTiempo(){
	conseguirHoraFecha()
	hora= parseInt(tiempo.hora);
	minuto= parseInt(tiempo.minuto);
	segundo= parseInt(tiempo.segundo);
}
function conseguirHoraFecha(){
	
	var date= new Date();
	tiempo.diaSemana=date.getDay().toString();
	tiempo.dia=date.getDate().toString();
	tiempo.mes=(date.getMonth()+1).toString();
	tiempo.anyo=date.getFullYear().toString();
	tiempo.hora=date.getHours().toString();
	tiempo.minuto=date.getMinutes().toString();
	tiempo.segundo= date.getSeconds().toString();
	
	delete date;
}
function colorFondo(){
	asignaVarTiempo()
	cambiaColor();
	document.body.style.background='rgba('+ rojo + ','+ verde + ',' + azul +  ',0.9)'; 
}
function cambiaColor(){	
	rojo= parseInt((hora*255)/24);
	verde= parseInt((minuto*255)/60);
	azul= parseInt((segundo*255)/60);
	
}
//centrar el div del reloj por medio de jquery
$(document).ready(function(){

     $(window).resize(function(){
 
          // aquí le pasamos la clase o id de nuestro div a centrar (en este caso "caja")
          $('.reloj').css({
               position:'absolute',
               left: ($(window).width() - $('.reloj').outerWidth())/2,
               top: ($(window).height() - $('.reloj').outerHeight())/2
          });
       
    });
$(document).ready(function() {
	$('#reloj').fadeIn(500);
});
// Ejecutamos la función
$(window).resize();
 
});


window.addEventListener('load', init,false);

function init(){

}