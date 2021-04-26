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


