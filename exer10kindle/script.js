const button = document.getElementById('enviar');
const inputNome = document.getElementById('nome');
const inputNota1 = document.getElementById('nota1');
const inputNota2 = document.getElementById('nota2');
const div =  document.getElementById('resultado')

button.style.cursor = "pointer"
div.style = "margin: 0 auto"
div.style.marginTop = "20px";
div.style.width = "50%";
div.style.borderRadius = "10px";
div.style.padding = "10px";
div.style.fontSize = "18px";
div.style.fontWeight = "700";


button.addEventListener('click',
  function () {
    const nome = inputNome.value;
    const nota1 = parseInt(inputNota1.value);
    const nota2 = parseInt(inputNota2.value);
    let media = (nota1 + nota2) / 2

    if (media >= 7) {
      div.textContent =
        "O aluno " + nome + " está aprovado com a nota " + media + ".";
      div.style.backgroundColor = "rgb(26, 138, 26)";
      div.style.color = "#fff";
    } 
    else if (media < 4) {
      div.textContent = "O aluno " + nome + " está de reprovado com a nota " + media + ".";
      div.style.backgroundColor = "red";
    } 
    else if (media < 7) {
      div.textContent =
        "O aluno " + nome + " está de recuperação com a nota " + media + ".";
      div.style.backgroundColor = "yellow";
    } 
    else if (!media) {
      div.textContent = "ERROR Insira os valores respectivos";
      div.style.backgroundColor = "red";
    }
  }
)
