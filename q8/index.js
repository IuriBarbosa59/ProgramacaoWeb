let maior = Number.MIN_SAFE_INTEGER;
let infDiv = document.getElementById("info");

for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Digite o ${i}º número:`));
  if (num > maior) {
    maior = num;
  }
}
infDiv.innerHTML += "<p>O maior número é: " + maior + "</p>";