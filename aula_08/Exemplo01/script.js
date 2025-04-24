//Função chamada ao clicar no botão 
function saudacao() {
    alert("Bem-Vindo a aula!")
}

//Atribui a função ao botão ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botaoSaudacao").addEventListener("click", saudacao);
});