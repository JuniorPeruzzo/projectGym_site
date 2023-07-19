async function ApiRequest(event) {
	event.preventDefault();
	let objetivo = document.getElementById("objetivo").value;
	let alimentos = document.getElementById("alimentos").value;
	let caloriasDia = document.getElementById("caloriasDia").value;

	const OPENAI_API_KEY = "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";
	let dietaManter =
		"Me indique uma alimentação para o meu dia visando apenas manter meu peso, minhas calorias diárias são" +
		caloriasDia +
		"e gosto de comer";
	alimentos;
	let dietaEmagrecer =
		"Me indique uma alimetação para o meu dia para me ajudar e emagrecer, minhas calorias diaria são de" +
		caloriasDia +
		"e gosto de comer" +
		alimentos;

	let dietaEngordar =
		"Me indique uma alimetação para o meu dia para me ajudar a ganhar peso minhas calorias diaria são de" +
		caloriasDia +
		"e gosto de comer" +
		alimentos;

	if (objetivo && alimentos && caloriasDia) {
		document.getElementById("button-pesquisa").value = "Montando sua Dieta...";

		let dietaChatGPT;

		if (objetivo === "manter") {
			dietaChatGPT = dietaManter;
		} else if (objetivo === "emagrecer") {
			dietaChatGPT = dietaEmagrecer;
		} else {
			dietaChatGPT = dietaEngordar;
		}

		let retorno = await fetch("https://api.openai.com/v1/completions", {
			method: "POST",

			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + OPENAI_API_KEY,
			},

			body: JSON.stringify({
				model: "text-davinci-003",
				prompt: dietaChatGPT,
				max_tokens: 2048,
				temperature: 0.5,
			}),
		});
		let json = await retorno.json();
		let resposta = json.choices[0].text;

		window.location.href = "resultado_dieta.html";
		document.getElementById("resultado").innerHTML = resposta;
		console.log(resposta);

		document.getElementById("button-pesquisa").value = "Receber Dicas";
	} else {
		alert("É necessário preencher todos os campos");
	}
}
