function validarDados() {

  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value;
  const salario = document.getElementById("salario").value;
  const sexo = document.querySelector('input[name="sexo"]:checked').value;
  const estadoCivil = document.getElementById("estado-civil").value;
  
  if (nome.length < 4) {
  alert("Nome deve ter pelo menos 4 caracteres.");
  return false;
  } else {
  document.getElementById("error-nome").textContent = "";
  }
  
  if (idade < 0 || idade > 150) {
  alert("Idade deve estar entre 0 e 150.");
  return false;
  } else {
  document.getElementById("error-idade").textContent = "";
  }

  if (salario <= 0) {
  alert("Salário deve ser maior que zero.");
  return false;
  } else {
  document.getElementById("error-salario").textContent = "";
  }

  if (!sexo) {
  alert("Selecione o sexo.");
  return false;
  } else {
  document.getElementById("error-sexo").textContent = "";
  }

  if (estadoCivil === "") {
  document.getElementById("error-estado-civil").textContent = "Selecione o estado civil.";
  return false;
  } else {
  document.getElementById("error-estado-civil").textContent = "";
  }

  return true;
  }