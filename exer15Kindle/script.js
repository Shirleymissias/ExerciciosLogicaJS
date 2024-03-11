let ano = document.getElementById('palindromo')
let buttons = document.getElementById('enviar')
let resultado = document.getElementById('resultado')


resultado.style.marginTop = "20px";
resultado.style.width = "350px";
resultado.style.borderRadius = "10px";
resultado.style.padding = "10px";
resultado.style.fontSize = "18px";
resultado.style.fontWeight = "700";

buttons.addEventListener('click', (ano) => {
    console.log(ano.value)
})