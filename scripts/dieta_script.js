async function ApiRequest(event) {
	event.preventDefault();
	var objetivo = document.getElementById("objetivo").value;
	var alimentos = document.getElementById("alimentos").value;
	var caloriasDia = document.getElementById("caloriasDia").value;

	const OPENAI_API_KEY =
		"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";

	var dietaManter =
		"Me indique uma alimentação para o meu dia visando apenas manter meu peso, minhas calorias diárias são" +
		caloriasDia +
		"e gosto de comer";
	alimentos;
	var dietaEmagrecer =
		"Me indique uma alimetação para o meu dia para me ajudar e emagrecer, minhas calorias diaria são de" +
		caloriasDia +
		"e gosto de comer" +
		alimentos;

	var dietaEngordar =
		"Me indique uma alimetação para o meu dia para me ajudar a ganhar peso minhas calorias diaria são de" +
		caloriasDia +
		"e gosto de comer" +
		alimentos;

	if (objetivo && alimentos && caloriasDia) {
		document.getElementById("button-pesquisa").value =
			"Montando sua Dieta...";

		let dietaChatGPT;

		if (objetivo === "manter") {
			dietaChatGPT = dietaManter;
		} else if (objetivo === "emagrecer") {
			dietaChatGPT = dietaEmagrecer;
		} else {
			dietaChatGPT = dietaEngordar;
		}
		//requisição para chatGPT
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

		document.getElementById("resultado").innerHTML = resposta;
		console.log(resposta);

		document.getElementById("button-pesquisa").value = "Receber Dicas";
	} else {
		alert("É necessário preencher todos os campos");
	}
}
