function calculaCalorias(event) {
	event.preventDefault();
	let genero = document.getElementById("genero").value;
	let idade = document.getElementById("idade").value;
	let altura = document.getElementById("altura").value;
	let peso = document.getElementById("peso").value;
	let atividade = document.getElementById("atividade").value;

	let tmb = 0;

	if (genero === "feminino") {
		tmb = 447.593 + 9.247 * peso + 3.098 * altura - 4.33 * idade;
	} else {
		tmb = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * idade;
	}

	let resultado = 0;

	if (atividade === "sendentario") {
		resultado = tmb * 1.2;
	} else if (atividade === "levemente") {
		resultado = tmb * 1.375;
	} else if (atividade === "moderadamente") {
		resultado = tmb * 1.55;
	} else if (atividade === "muito") {
		resultado = tmb * 1.725;
	} else {
		resultado = tmb * 1.9;
	}

	console.log(resultado);

	document.getElementById("resultado").innerHTML =
		"Seu consumo aproximado de calorias diárias é de " + resultado.toFixed(2);
}
