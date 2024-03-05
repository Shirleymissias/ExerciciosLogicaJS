let calculo = document.getElementById("calculo");
let limpar = document.getElementById("limpar");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");

calculo.addEventListener('click', () => {
  const nPeso = Number(peso.value);
  const nAltura = Number(altura.value);
  const calcular = nPeso / nAltura;

  if()
  resultado.innerText = "resultado" + calcular;

})