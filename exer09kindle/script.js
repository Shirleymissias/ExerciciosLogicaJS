// let numeroMax = Number.MAX_VALUE
// console.log('Número Máximo:', numeroMax)

// let number = parseInt(prompt("Insira um número:"))

// if (number == 0) {
//    alert(number + " é nulo")
// } else if ( number > 0 ) {
//     alert(number + " é positivo");
// } else if (number < 0) {
//     alert(number + " é negativo");
// }

const button = document.getElementById('cliquei')
const input = document.getElementById('num')
const div = document.getElementById("resultado");

div.style.marginTop = '20px'
div.style.width = '350px'
div.style.borderRadius = '10px'
div.style.padding = '10px'
div.style.fontSize = '18px'
div.style.fontWeight = "700";

button.addEventListener('click', 
    () => {
      const number = parseFloat(input.value);
      
      if (number === 0) {
         div.textContent = 'O resultado é ' + number + ' é nulo'
         div.style.background = 'yellow'

      } else if ( number > 0 ) {
          div.textContent = "O resultado é " + number + " é positivo";
          div.style.background = "green";
          div.style.color = '#fff'

      } else if (number < 0) {
          div.textContent = "O resultado é  " + number + " é negativo";
          div.style.background = "red"

      } else if (!number) {
        div.textContent = 'É Obrigatório inserir um valor númerico!'
        div.style.background = "red";
      }
    })


    
