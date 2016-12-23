
var parrot = function(talking, hora) {   
    if ( (hora < 7 || hora > 20) && talking) {
    	return 1;
    }
    else {
    	return 0;
    }
};

var evaluar = function () {
	var talking = parseInt(document.getElementById("talking").value);
	var hora = parseInt(document.getElementById("hora").value);
    var salida = parrot(talking, hora);
    $('#salida').val(salida);
}




