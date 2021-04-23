function media(n1, n2) {
	var nota1 = n1;
	var nota2 = n2;
	var media = (nota1 + nota2) / 2;
	console.log(media);
	return media;
}

var n1 = parseFloat(prompt("Digite um numero"));
var n2 = parseFloat(prompt("Digite outro numero"));

var resultado = media(n1, n2);

alert("o resultado da media é " + resultado);
