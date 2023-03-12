let user, password;

do {
  user = prompt("Digite o nome de usuário:");
  password = prompt("Digite a senha:");

  if (user !== null && password !== null) {
    if (user === password) {
      alert("A senha não pode ser igual ao nome !!!");
    } else {
      alert("Login realizado com sucesso !");
    }
  }
} while (user === password || user === null || password === null);