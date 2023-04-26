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
		"e gosto de comer" +
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

	console.log("antes do IF");

	if (objetivo && alimentos && caloriasDia) {
		document.getElementById("button-pesquisa").value =
			"Montando sua dieta...";

		let dietaChatGPT;

		if (objetivo === "manter") {
			dietaChatGPT = dietaManter;
		} else if (objetivo === "emagrecer") {
			dietaChatGPT = dietaEmagrecer;
		} else {
			dietaChatGPT = dietaEngordar;
		}
		console.log("entrou no IF");
		//requisição para chatGPT
		await fetch("https://api.openai.com/v1/completions", {
			// Método para enviar os dados
			method: "POST",

			// Dados ennviados no cabeçalho da requisição
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + OPENAI_API_KEY,
			},

			// Enviar os dados no corpo da requisição
			body: JSON.stringify({
				model: "text-davinci-003", //Modelo
				prompt: dietaChatGPT, // Texto da pergunta
				max_tokens: 2048, // Tamanho da resposta
				temperature: 0.5, // Criatividade na resposta
			}),
		});
		console
			.log("antes no await")
			// Acessa o then quando obtiver resposta
			.then((resultado) => resultado.json())
			.then((dados) => {
				//console.log(dados);
				//console.log(dados.choices[0].text);

				// Enviar o texto da resposta para a página HTML
				document.getElementById("resultado").innerHTML =
					dados.choices[0].text;
			})
			// Retorna catch quando gerar erro
			.catch(() => {
				// Enviar o texto da resposta para a página HTML
				document.getElementById("resultado").innerHTML =
					"Sem resultado";
			});
		document.getElementById("button-pesquisa").value = "Receber Dicas";
	}

	console.log("Chegou");
}
