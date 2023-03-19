function calcularAnos() {
  let pA = Number(document.getElementById("pA").value);
  let tA = Number(document.getElementById("tA").value);
  let pB = Number(document.getElementById("pB").value);
  let tB = Number(document.getElementById("tB").value);

  let anos = 0;
  while (pA < pB) {
    pA = pA * (1 + tA/100);
    pB = pB * (1 + tB/100);
    anos++;
    
  }
  alert("Serão necessários " + anos + " anos para que a população do país A ultrapasse ou iguale a população do país B.");
  
}