const button = document.getElementById('cliquei')
const div = document.getElementById("resultado");
const inputIdade = document.getElementById("idade");

div.style.marginTop = "20px";
div.style.width = "350px";
div.style.borderRadius = "10px";
div.style.padding = "10px";
div.style.fontSize = "18px";
div.style.fontWeight = "700";

button.addEventListener('click',
  () => {
      const idade = parseInt(inputIdade.value)

      if(!idade) {
        div.textContent = 'ERROR Insira um VALOR'
        div.style.backgroundColor = "red";
      } 
      else if (idade === 16 || idade === 17 || idade > 70 ) {
        div.textContent = "Você tem " + idade + " anos não é obrigatório votar, porém você pode votar se quiser.";
        div.style.backgroundColor = "green";
        div.style.color = "#fff";
      } 
      else if (idade >= 18 && idade <= 70) {
          div.textContent = 'Você tem ' + idade + ' anos, está apto para votar.'
          div.style.backgroundColor = 'green'
          div.style.color = '#fff'
      }
      else if (idade < 18){
          div.textContent = "Você tem " + idade + " anos, infelizmente não pode votar.";
          div.style.backgroundColor = "red";
      }
  }
)