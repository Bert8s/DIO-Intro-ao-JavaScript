/* PARTE 2: MANIPULANDO ELEMENTOS DA PÁGINA */

//Função ligada ao evento de clicar quanrado o botão é clicado. Mostra um Alert e injeta um elemento html
function clicou() {
  alert("Obrigado por clicar");
  document.getElementById("agradecimento").innerHTML =
    "<b>Obrigado por clicar</b>";
}

//Função ligada ao evento de clicar no texto "Obrigado por clicar" criado pela função "clicou". Abre o meu perfil no github.com
function redirecionar() {
  //Abre o site numa nova janela
  window.open("https://github.com/Bert8s");

  //Abre o novo site na mesma janela
  //window.location.href = "https://github.com/Bert8s";
}

//Função que troca a mensagem quando o mouse passa pelo texto com id "mousemove"
function trocar() {
  document.getElementById("mousemove").innerHTML =
    "Obrigado por passar o mouse";
}

//Função que mostra a mensagem original quando o mouse sai do texto com id "mousemove"
function voltar() {
  document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

//Mesmas funções anteriores mas nesse caso recebem o objeto como parámetro na entrada da função. Olhar no script index.html (this)
//Neste caso o elemento html não precisa de "id"
function trocar2(elemento) {
  elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar2(elemento) {
  elemento.innerHTML = "Passe o mouse aqui";
}

//Função que mostra o valor do elemento quando este muda. Passamos o elemento usando o "this" no script indext.html
function funcaoChange(elemento) {
  console.log(elemento.value);
}
