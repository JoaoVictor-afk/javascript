alert("Hello World");

console.log("ola mundo");

var c = "5";

var d = 5;

var e = d + parseInt(c);

var idade = 14;

var b = idade <= 10;

var a = idade >= 60;

var go = b || a;

console.log("maior que 60", a);

console.log("Menor que 10", b);

console.log("idade", idade);

console.log("tem direito a gratuidade?", go);

console.log(e);

var idade = parseFloat(prompt("Digite a sua idade"));

idade >= 18 ? console.log("Pode") : console.log("Não Pode");

var pode = idade >= 18 ? true : false;

console.log(pode);

if (idade >= 19 && idade <= 70) {
	console.log("pode");
	console.log("qual o seu pedido?");
} else if (idade >= 18) {
	console.log("pode");
	console.log("mostre a sua indentidade");
} else {
	console.log("Não pode");
	console.log("Volte futuramente");
}
var nota1 = 6;

var nota2 = 5;

var media = (nota1 + nota2) / 2;

var conceito = "legal";

if (media >= 8.5) {
	conceito = "bom";
} else if (media >= 6.5) {
	conceito = "otimo";
} else {
	conceito = "regular";
}
console.log(media);

console.log(conceito);

switch (conceito) {
	case "bom":
		console.log("Parabens vc esta muito bem");
		break;
	case "otimo":
		console.log("Você esta quase perfeito");
		break;
	case "regular":
		console.log("Estude mais um pouco");
		break;
	default:
		console.log("Houve algum erro");
		break;
}
