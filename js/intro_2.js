/* ARRAY E DICIONÁRIO */

//Inicialização de arrays e objetos
const lista = ["maçã", "pêra", "laranja"];
const fruta = { nome: "abacaxi", cor: "marrom" };
const frutas = [
  { nome: "abacaxi", cor: "marrom" },
  { nome: "uva", cor: "roxa" },
];

//Mostrando a lista
console.log(lista);
//Mostrando o elemento da lista da posição 1
console.log(lista[1]);

//Tira o elemento da posição 1
lista.pop(1);
//Mostra como ficou a lista
console.log(lista);

//Adiciona um elemento no final da array
lista.push("tarangina");
//Mostra como ficou a lista
console.log(lista);

//Mostra a longitude da array
console.log(lista.length);

//Mostra a lista com o ordem invertido
console.log(lista.reverse());

//Converte o conteúdo da array numa string
console.log(lista.toString());
console.log(...lista);

//Imprimir um caráter do primeiro elemento string da array
console.log(lista.toString()[0]);

//Selecionar o terceiro elemento da array para imprimir o segundo caráter da string
console.log(lista[2].toString()[lista[2]]);

//Selecionar o terceiro elemento da array para imprimir o último caráter da string
console.log(lista[2].toString()[lista[2].length - 1]);

//Join para unir os elementos usando outro elemento de "união" entre eles
console.log(lista.join(" || "));

//Mostra o objeto
console.log(fruta);

//Mostra as propriedades do objeto
console.log(fruta.nome, fruta.cor);

//Mostra a array de objetos
console.log(frutas);

//Mostra a propiedade nome do segundo objeto
console.log(frutas[1].nome);
