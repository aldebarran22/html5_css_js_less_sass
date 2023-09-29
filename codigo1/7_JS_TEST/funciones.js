/* DEFINICION DE VARIABLES GLOBALES */
var h=0;
var m=0;
var s=30;
var sol = new Array(4);
var resp = new Array(4);

function valida() {
	/* Esta función valida que se haya rellenado el dni y el nombre */
	var nombre;
	var dni;
	
	
	nombre = document.getElementById("nombre");
	dni = document.getElementById("dni");
			
	if (dni.value == ""){	
		alert("Debe de teclear el numero de DNI");
		dni.focus();
		return;
	}
	
	dni.disabled=true;
	
	if (nombre.value == ""){
		alert("Debe teclear el nombre ...");
		nombre.focus();
		return;
	}
	
	// Inicializar los arrays:
	inicializar();
	
	// Mostrar la capa del examen:
	document.getElementById("examen").style.visibility="visible";
	
	// Arrancar el crono:
	f_crono();
}

function testCompleto(){
	/* Comprueba si el usuario ha marcado todas las respuestas. */
	var i;
	var conteo = 0;
	
	for (i=0; i < resp.length ; i++)
		if (resp[i] != "") 
			conteo++;
			
	return(conteo);	
}

function finTest(){
	/* Corta el Timeout y calcula y presenta la nota del test */
	
	// Calcular la nota:
	alert("¡EL TEST HA TERMINADO! \n\nLa nota obtenida es: " + calcula_nota());
	clearTimeout(0);
}

function anotar(respuesta){
	// Anota la resp del usuario en la posición adecuada.
	var pos;
	var letra;
	var valor;
	
		
	// Extraer los datos. La posición y la letra:
	pos = respuesta.value.charAt(0) - 1;
	letra = respuesta.value.charAt(1);
	
		
	// Anotar en el array:
	resp[pos] = letra;
	
	// ¿Ha terminado el Test?
	if (testCompleto()==4){
		s = 0;
		m = 0;
		h = 0;				
	} 
}

function calcula_nota(){
	/* Calcula la nota a partir de los dos arrays */
	var i;
	var aciertos = 0;
	
	for (i = 0 ; i < sol.length ; i++)
		if (sol[i] == resp[i])
			aciertos++;
	
	return(aciertos);
}
		 	

function inicializar(){
	/* Esta función se encarga de inicializar los valores de los arrays */
	var i;
	
	// Soluciones:
	sol[0] = "C"; 
	sol[1] = "C";
	sol[2] = "B";
	sol[3] = "B";
	
	// Respuestas del test:
	for  (i = 0 ; i < resp.length ; i++)
		resp[i] = "";
}		

function f_crono(){
	var reloj;
	var texto = "Su tiempo restante es: ";
	var tiempo;
	var segundos;
	var fecha;
	
	/* Codigo para hacer la cuenta atrás */
	segundos = h * 3600 + m * 60 + s;
	
	// Descontar un segundo:
	if (segundos > 0) segundos--;
	
	// Nos apoyamos en el objeto fecha:
	fecha = new Date();
	
	// Le cargamos con nuestros datos:
	fecha.setHours(h);
	fecha.setMinutes(m);
	fecha.setSeconds(segundos);
		
	h = fecha.getHours();
	m = fecha.getMinutes();
	s = fecha.getSeconds();

	if (s < 10){ s = "0" + s; }
	if (m < 10){ m = "0" + m; }
	if (h < 10){ h = "0" + h; }
	
	tiempo = h + ":" + m + ":" + s;
	
	/* Captura la capa y cambia el tiempo */
	reloj = document.getElementById("reloj");
	reloj.innerHTML = texto + tiempo; 
	
	if (segundos > 0) // ¿Continuar con la cuenta atrás?
		setTimeout("f_crono()", 1000);	
			
	else // Segundos == 0, fin del Test.
		finTest();
}	



