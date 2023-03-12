let num = '';
let infoDiv = document.getElementById("info");

for (let i = 1; i <= 20; i++) {
  infoDiv.innerHTML += "<p>Contagem: " + i + "</p>";
}

for (let i = 1; i <= 20; i++) {
  num += i + ' ';
}
infoDiv.innerHTML += "<p>Contagem lado a lado: " + num + "</p>";