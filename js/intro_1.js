/* INTRODUÇÃO AO JAVASCRIPT */

//Inicialização de variáveis
const nome = "Albert M.S.";
const idade = "37";
const idade2 = 22;
const frase = "Faço questão de trabalhar no Porto Digital de São Paulo.";
const n1 = 8;
const n2 = 3;
//alert("Seja bem vindo " + nome + " !");

//Exemplo de como JS lida com string e números:
alert(
  "Não é possível somar " +
    idade +
    " (idade) + " +
    idade2 +
    " (idade2) porque idade é uma string. Pelo tanto, nesse caso JS faz uma contatenação."
);

//Mostrando uma string
console.log(nome);
//Mostrando o resultado de uma concatenação
console.log(idade + idade2);
//Mostrando como trocar uma parte de uma string
console.log(frase.replace("São Paulo", "Recife"));
//Trocando as maiúsculas por minúsculas
console.log(frase.toLowerCase());
//Mostrar o resultado de uma multiplicação
console.log(n1 * n2);
