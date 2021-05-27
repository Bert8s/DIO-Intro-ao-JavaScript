/* DESENVOLVA PÁGINAS WEB COM JAVASCRIPT */

//Função com dois parámetros de entrada que devolve o resultado da soma
function soma(n1, n2) {
  return n1 + n2;
}

//Função que troca uma palavra por outra em uma frase. Devolve o resultado da operação
function setReplace(frase, nome, novoNome) {
  return frase.replace(nome, novoNome);
}

//Função que valida a idade como parámetro de entrada e devolve um valor bool
function validaIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

//Chama a função soma
console.log(soma(10, 37));

//String para usar na função
const f = "Pernambuco é meu estado.";
//Usa a funão setReplace
console.log(setReplace(f, "estado", "país"));

//Chama a função validaIdade pedindo a entrada do dado ao usuario
console.log(validaIdade(prompt("Qual é sua idade?")));
