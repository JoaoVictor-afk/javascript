var number = Math.random() * 100;

for (var i = 1; i <= number; i++) {
	console.log("Executando o for pela " + i + " vez");
}

while (number < 90) {
	console.log(number);
	number = Math.random() * 100;
}
console.log(number);

console.log("acabou");

var alunos = new Array("igor", "marcos", "mariana", "vitão");

var pessoas = ["Jose", "laura", "aleuluia", "João", "paulo", "jacquin"];

for (var i of pessoas) {
	console.log(i);
}

console.log(pessoas.length);
