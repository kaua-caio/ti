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