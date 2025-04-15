document.addEventListener("DOMContentLoaded", function() {
    // Slider no estilo CNN
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    
    // Duplica os slides para efeito contínuo
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
    
    // Botão Ajuda
    const btnHelp = document.querySelector('.btn-help');
    btnHelp.addEventListener('click', function() {
        window.open('https://mail.google.com/chat/u/0/#chat/home', '_blank');
    });
    
    // Ativa efeitos de entrada
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 200);
    
    // Modal
    const modal = document.getElementById("meuModal");
    const btnModal = document.querySelector("#botoes button:last-child");
    const span = document.getElementsByClassName("fechar")[0];
    
    btnModal.addEventListener('click', function() {
        modal.style.display = "flex";
        setTimeout(() => {
            modal.style.opacity = "1";
        }, 10);
    });
    
    span.addEventListener('click', function() {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    });
});

// Mantém todas as funções originais
function abrirTask() {
    window.open('https://forms.clickup.com/9011833817/f/8cjbayt-7791/8LVM6MSRGMTA3SCR8N', '_blank');
}

function redefinirSenha() {
    window.open('https://console.jumpcloud.com/login', '_blank');
}

function erpbi() {
    window.open('https://erp.gdigital.com.br/greenn/admin/', '_blank');
}

function primeiraConfig() {
    window.location.href = 'public/check/checklist.html';
}

function acessarManual() {
    window.location.href = 'public/Manual/manual.html';
}

function abrirTutoriais() {
    window.location.href = 'public/tutoriais/tutoriais.html';
}

function abrirModal() {
    const modal = document.getElementById("meuModal");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);
}

function fecharModal() {
    const modal = document.getElementById("meuModal");
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}





// Seleciona os elementos necessários
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const chatClose = document.getElementById('chat-close');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');
const chatSend = document.getElementById('chat-send');

// Função para enviar a mensagem
function sendMessage(message, fromUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(fromUser ? 'user' : 'bot');
  messageDiv.textContent = message;
  chatBody.appendChild(messageDiv);
  chatBody.scrollTop = chatBody.scrollHeight; // rolar até a última mensagem
}

// Função para processar a entrada do usuário
function processInput() {
  const userInput = chatInput.value.trim();
  if (userInput === '') return;

  sendMessage(userInput, true);  // Exibe a mensagem do usuário

  // Lógica simples para responder conforme a escolha do usuário
  let response = '';
  switch (userInput) {
    case '1':
      response = '🚀 Como atualizar sua senha no JumpCloud:1- Acesse: https://console.jumpcloud.com/login. 2-  Faça login com seu usuário e senha de login da máquina, 3- Vá até Segurança e clique em Resetar Senha, 4-  Escolha uma nova senha e confirme  ';
      break;
    case '2':
      response = 'Você escolheu: Saber sobre departamentos. Digite o nome do departamento.';
      break;
    case '3':
      response = 'Você escolheu: Aprender a usar a plataforma. Eu posso guiar você passo a passo!';
      break;
    case '4':
      response = 'Você escolheu: Outras dúvidas. Fique à vontade para perguntar!';
      break;
    default:
      response = 'Desculpe, não entendi sua escolha. Por favor, digite um número de 1 a 4.';
  }

  // Exibe a resposta do bot
  setTimeout(() => sendMessage(response), 500);

  chatInput.value = ''; // Limpa o campo de input
}

// Quando clicar no botão para abrir o chat
chatToggle.addEventListener('click', () => {
  chatBox.classList.toggle('show');  // Adiciona ou remove a classe 'show' para mostrar/esconder o chat
});

// Quando clicar no botão de fechar
chatClose.addEventListener('click', () => {
  chatBox.classList.remove('show');  // Remove a classe 'show' para esconder o chat
});

// Quando o botão de enviar for clicado
chatSend.addEventListener('click', processInput);

// Quando o usuário pressionar Enter
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    processInput();
  }
});



  

