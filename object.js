var nomes = ["jose", "maria", "joana", "carla", "mauricio"];
var nota1 = [7, 6.5, 9.5, 7.4, 8.3];
var nota2 = [8, 7, 9, 8, 7.5];

function media(nota1, nota2) {
	var media = (nota1 + nota2) / 2;

	return media;
}
function passou(media) {
	if (media > 7) {
		return "Aprovado";
	} else {
		return "Reprovado";
	}
}

for (var index in nomes) {
	var notaA = nota1[index];
	var notaB = nota2[index];

	var m = media(notaA, notaB);

	console.log(
		nomes[index] +
			" - " +
			notaA +
			" - " +
			notaB +
			" - " +
			media(notaA, notaB) +
			" - " +
			passou(m)
	);
}

var aluno = { nome: "igor", nota1: [7.5, 6.5] };

aluno.matricula = 12321;

aluno["sobrenome"] = "oliveira";

console.log(aluno.nome);
