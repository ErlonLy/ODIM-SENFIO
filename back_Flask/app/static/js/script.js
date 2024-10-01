const loginBtn = document.getElementById('loginBtn');
const welcomeText = document.getElementById('welcomeText');
const welcomeMessage = document.getElementById('welcomeMessage');
const container = document.getElementById('container');
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('usernameInput');
const welcomeImage = document.getElementById('welcomeImage'); // Imagem a ser exibida

loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do botão
    
    const username = usernameInput.value; // Pega o valor do nome de usuário
    
    // Esconder o formulário de login
    loginForm.style.display = 'none';
    
    // Adicionar a classe para mover o painel verde
    container.classList.add("right-panel-active");
    
    // Atualizar o texto do painel de boas-vindas com o nome do usuário
    welcomeText.textContent = `Seja bem-vindo, ${username}!`;
    welcomeMessage.textContent = "Você está logado no sistema de gerenciamento.";
    
    // Mostrar a imagem na parte branca
    welcomeImage.style.display = 'block';
});
