function calcularSigno() {

  let resultado = "";
  let signo = document.getElementById("signo").value;

  if (signo == "aquario") {
    resultado = "Leão";
  }

  else if (signo == "Àries") {
    resultado = "Libra";
  }
  else if (signo == "touro") {
    resultado = "Virgem";
  }
  else if (signo == "gemeos") {
    resultado = "Sagitário";
  }
  else if (signo == "cancer") {
    resultado = "Capricórnio";
  }
  else if (signo == "leão") {
    resultado = "Aquário";
  }
  else if (signo == "virgem") {
    resultado = "Touro";
  }
  else if (signo == "libra") {
    resultado = "Peixes";
  }
  else if (signo == "escorpião") {
    resultado = "Áries";
  }
  else if (signo == "sagitario") {
    resultado = "Gêmeos";
  }
  else if (signo == "capricornio") {
    resultado = "Câncer";
  }
  else {
    resultado = "try again!  tente escrever seu signo de outra forma";
  }
  document.getElementById("resposta").textContent = "Sua combinação é: " + resultado;
  return resultado;

}

let mostrarCombinacao = document.getElementById("mostrarCombinacao");
mostrarCombinacao.addEventListener("click", calcularSigno);
