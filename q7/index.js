let soma = 0;
let infDiv = document.getElementById("info");

for (let i = 1; i <= 5; i++) {
  let numero = parseInt(prompt(`Digite o ${i}º número:`));
  soma += numero;
}

let media = soma / 5;

infDiv.innerHTML += "<p>A soma dos números é: " + soma + "</p>";
infDiv.innerHTML += "<p>e a média é: " + media + "</p>";