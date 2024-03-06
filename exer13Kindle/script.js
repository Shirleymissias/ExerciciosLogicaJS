let calculo = document.getElementById("calculo");
let limpar = document.getElementById("limpar");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");

resultado.style.marginTop = "20px";
resultado.style.width = "350px";
resultado.style.borderRadius = "10px";
resultado.style.padding = "10px";
resultado.style.fontSize = "18px";
resultado.style.fontWeight = "700";

limpar.addEventListener('click', () => {
  peso.value = ""
  altura.value = ""
  resultado.remove()
})

calculo.addEventListener('click', () => {
  const nPeso = parseFloat(peso.value);
  const nAltura = parseFloat(altura.value);
  const calcular = (nPeso / (nAltura * nAltura)).toFixed(2);
  
  if ( calcular <= 18.5) {
    resultado.textContent = "O resultado é " + calcular + " Você está muito abaixo do peso"  
  } else if (calcular > 18.5 && calcular <= 24.9) {
    resultado.textContent = "O resultado é " + calcular + " Você está com o peso Normal" 
  } else if (calcular > 24.9 && calcular <= 29.9) {
    resultado.textContent = "O resultado é " + calcular + " Você está com Sobrepeso" 
  } else if (calcular > 29.9  && calcular <= 34.9) {
    resultado.textContent = "O resultado é " + calcular + " Você está com Obesidade Grau I" 
  } else if (calcular > 34.9  && calcular <= 39.9) {
    resultado.textContent = "O resultado é " + calcular + " Você está com Obesidade Grau II" 
  } else if (calcular > 40) {
    resultado.textContent = "O resultado é " + calcular + " Você está com Obesidade Grau III" 
  }
})