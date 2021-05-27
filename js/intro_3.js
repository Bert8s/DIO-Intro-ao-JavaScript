/* CONDICIONAIS, LAÇOS DE REPETIÇÃO E DATE */

//Inicializações
//Número
const idade3 = 37;
//Pede para o usuario entrar dados
const idade4 = prompt("Qual é sua idade?");
//Contador para usar no laço FOR
let count = 0;
//Pegar data atual
let hoje = new Date();

//Condicional IF/ELSE Exemplo 1
if (idade3 > 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

//Condicional IF/ELSE Exemplo 2
if (idade4 >= 18) {
  console.log("Você tem " + idade4 + " anos. Pelo tanto é maior de idade");
} else {
  console.log("Você tem " + idade4 + " anos. Pelo tanto é menor de idade");
}

//Laço WHILE
while (count < 5) {
  console.log(count, count + 1);
  count++;
}

//Laço FOR
for (let i = 0; i < 5; i++) {
  console.log("Contando: ", i);
}

//Mostra a data atual:
//Dia semana, Mês, dia mês, ano, hora, furo horário
alert(hoje);

console.log(hoje);
//Mostra as propriedades do objeto hoje
console.log("Hora de hoje: ", hoje.getHours());
console.log("Minutos de hoje: ", hoje.getMinutes());
console.log("Ano atual: ", hoje.getFullYear());
console.log("Fuso horário: ", hoje.getTimezoneOffset() / 60);
