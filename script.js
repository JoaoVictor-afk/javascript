function criarAluno(nome, n1, n2) {
	return {
		nome: nome,
		nota: n1,
		nota2: n2,

		media: function () {
			return (this.nota + this.nota2) / 2;
		},
	};
}
var turma = [
	criarAluno("Vitor", 9, 1),
	criarAluno("Luisa", 10, 8),
	criarAluno("João", 8, 7.5),
];

turma.forEach(function (turma) {
	console.log(turma.nome);
	console.log(turma.media());
});
var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());

var numero1 = 4;
let numero2 = 5;
const numero3 = 6;

console.log(numero1);
console.log(numero2);
console.log(numero3);
function h1click() {
	console.log("executando função");
}
function changeh1(i) {
	let h1 = document.getElementsByTagName("h1")[0];
	h1.innerText = i.value;
}
function hideh1() {
	let h1 = document.getElementsByTagName("h1")[0];
	h1.style.display = "none";
}
function over(Elemento) {
	Elemento.style.backgroundColor = "blue";
}
function onout(Elemento) {
	Elemento.style.backgroundColor = "blueviolet";
}
