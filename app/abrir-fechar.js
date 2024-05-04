const botaoLateral = document.getElementById('barras-fechar-lateral');
const botaoNotificacao = document.getElementById('botao-notificacao');

const menuLateral = document.querySelector('.menu__lateral');
const caixaNotificacoes = document.querySelector('.caixa__notificacoes');

botaoLateral.addEventListener('click', () => abrirOuFechar(menuLateral));
botaoNotificacao.addEventListener('click', () => abrirOuFechar(caixaNotificacoes));

// **************** 
function abrirOuFechar(aba) {
    aba.classList.toggle('esconder');
}
