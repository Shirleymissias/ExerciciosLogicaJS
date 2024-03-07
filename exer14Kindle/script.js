let ano = document.getElementById('anoBissexto')
let buttons = document.getElementById('enviar')
let resultado = document.getElementById('resultado')
let limpar = document.getElementById('limpar')

resultado.style.marginTop = "20px";
resultado.style.width = "350px";
resultado.style.borderRadius = "10px";
resultado.style.padding = "10px";
resultado.style.fontSize = "18px";
resultado.style.fontWeight = "700";

function anoBissexto () {
    let anoB = ano.value

    if ((anoB % 4 == 0 && anoB % 100 != 0) || (anoB % 400 == 0)) {
        resultado.innerText = 'O ano é ' + 'Bissexto'
    } else {
        resultado.innerText = 'O ano é não Bissexto'
    }
}

function removeInout () {
    ano.value = ""
    resultado.remove()
}

limpar.addEventListener('click', removeInout)

limpar.addEventListener('keypress', function(event){
    if(event.key == 13) {
      event.preventDefault();
      removeInout();
    }
  });

buttons.addEventListener('click', anoBissexto)

buttons.addEventListener('keypress', function(event){
    if(event.key == 13) {
      event.preventDefault();
      removeInout();
    }
  });

