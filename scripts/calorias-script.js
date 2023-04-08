function calculaCalorias(event) {
  event.preventDefault();
var genero = document.getElementById("genero").value;
var idade = document.getElementById("idade").value;
var altura = document.getElementById("altura").value;
var peso = document.getElementById("peso").value;
var atividade = document.getElementById("atividade").value;

let tmb = 0;

if(genero === "feminino") {
  tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade)
} else {
tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade)
}

let resultado = 0;

if(atividade === "sendentario") {
  resultado = tmb * 1.2
} else if (atividade === "levemente"){
  resultado = tmb * 1.375
} else if (atividade === "moderadamente") {
  resultado = tmb * 1.55
} else if (atividade === "muito") {
  resultado = tmb * 1.725 
} else {
  resultado = tmb * 1.9
}

console.log(resultado)

document.getElementById("resultado").innerHTML = "Seu consumo aproximado de calorias diárias é de " + resultado.toFixed(2);
}




/* O resultado obtido após multiplicar a TMB pelo fator de atividade é uma estimativa aproximada das calorias diárias que o seu corpo consome para manter as funções vitais em repouso e o seu nível de atividade física. Essa estimativa pode ser usada como base para planejar a sua ingestão de calorias diárias com base nos seus objetivos de saúde, como manutenção de peso, perda de peso ou ganho de peso.
Lembrando que essa é uma estimativa e que o gasto calórico pode variar de pessoa para pessoa. É sempre recomendado consultar um profissional de saúde, como um nutricionista ou médico, para obter uma avaliação mais precisa e personalizada das suas necessidades calóricas com base na sua saúde, estilo de vida e objetivos específicos. */
