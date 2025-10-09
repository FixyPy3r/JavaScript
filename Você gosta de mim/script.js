const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const mensagem = document.getElementById('mensagem');

// Quando clicar em "Sim"
botaoSim.addEventListener('click', () => {
  mensagem.textContent = 'Aaaawn ❤️ Obrigada! Você fez a escolha certa';
});

// Quando tentar clicar em "Não"
botaoNao.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
  const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);
  botaoNao.style.left = `${x}px`;
  botaoNao.style.top = `${y}px`;
});