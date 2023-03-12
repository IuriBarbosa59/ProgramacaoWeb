let n1 = parseInt(prompt("Digite o primeiro número:"));
let n2 = parseInt(prompt("Digite o segundo número:"));
let infDiv = document.getElementById("info");
let num = "";

if (nu1 < nu2) {
  for (let i = nu1 + 1; i < nu2; i++) {
    num += i + " ";
  }
} else if (n1 > n2) {
  for (let i = n2 + 1; i < n1; i++) {
    num += i + " ";
  }
} else {
  alert("Os números são iguais!");
}
infDiv.innerHTML += "<p>Números inteiros que estão no intervalo: " + num + "</p>";