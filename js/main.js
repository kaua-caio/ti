document.addEventListener("DOMContentLoaded", function() {
    // Duplica as frases para efeito contínuo
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
    
    // Botão Ajuda
    const btnHelp = document.querySelector('.btn-help');
    btnHelp.addEventListener('click', function() {
        window.open('https://mail.google.com/chat/u/0/#chat/home', '_blank');
    });
    
    // Suaviza o carregamento
    document.body.style.opacity = '1';
});

// Mantém todas as funções originais
function abrirTask() {
    window.open('https://forms.clickup.com/9011833817/f/8cjbayt-7791/8LVM6MSRGMTA3SCR8N', '_blank');
}

// ... outras funções permanecem iguais ...

// Função para redirecionar ao clicar no botão "Abrir Task"
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

// Modal
const modal = document.getElementById("meuModal");
const btnModal = document.querySelector("#botoes button:last-child");
const span = document.getElementsByClassName("fechar")[0];
document.getElementById("meuModal").style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("meuModal");
    var fechar = document.querySelector(".fechar");

    window.abrirModal = function () {
        modal.style.display = "flex";
    };

    window.fecharModal = function () {
        modal.style.display = "none";
    };

    fechar.addEventListener("click", fecharModal);

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            fecharModal();
        }
    });
});

