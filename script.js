//boolean
//null
//undefined
//number
//string

//+adição
//-Subtração
//*mutiplicação
// / Divisão
//% modulo
//++incremento
//--decremento
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
