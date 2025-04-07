document.addEventListener('DOMContentLoaded', function() {
    // Inicializa com 'todos' selecionado
    filtrarPorTag('todos');
    
    // Fechar modal ao pressionar ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        fecharVideo();
        document.getElementById("modalFiltros").classList.remove("active");
      }
    });
    
    // Animação do título
    const title = document.getElementById('title').querySelector('span');
    const cursor = document.getElementById('cursor');
    const pauseIcon = document.getElementById('pauseIcon');
    const playIcon = document.getElementById('playIcon');
    
    setTimeout(() => {
      cursor.style.opacity = '1';
      
      setTimeout(() => {
        cursor.style.left = '15px';
        
        setTimeout(() => {
          cursor.style.animation = 'click 0.4s ease';
          
          setTimeout(() => {
            pauseIcon.style.opacity = '0';
            pauseIcon.style.transform = 'scale(0.8)';
            
            playIcon.style.opacity = '1';
            playIcon.style.transform = 'translate(-40%, -50%) scale(1)';
          }, 200);
        }, 400);
      }, 800);
    }, 800);
  });
  
  let tagsAtivas = ['todos'];
  
  // Substituir as funções de vídeo por estas:

function abrirPDF(url) {
    const modal = document.getElementById("pdfModal");
    const pdfViewer = document.getElementById("pdfViewer");
    
    // Configura o visualizador de PDF
    pdfViewer.src = url + "#toolbar=0&navpanes=0";
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
  
  function fecharPDF() {
    const modal = document.getElementById("pdfModal");
    const pdfViewer = document.getElementById("pdfViewer");
    
    pdfViewer.src = '';
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
  
  // Atualizar os event listeners nos cards (exemplo para um card)
  document.querySelector(".card[data-tags='seguranca']").onclick = function() {
    abrirPDF('pdfs/politica_de_seguranca.pdf');
  };
  
  // Repetir para os outros cards com seus respectivos PDFs
  
  function filtrarPorTag(tag) {
    if (tag === 'todos') {
      tagsAtivas = ['todos'];
      document.querySelectorAll('.filtro-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
      });
      document.getElementById('filtro-todos').checked = true;
    } else {
      const index = tagsAtivas.indexOf(tag);
      if (index > -1) {
        tagsAtivas.splice(index, 1);
      } else {
        tagsAtivas.push(tag);
      }
      
      // Remove 'todos' se outras tags estiverem selecionadas
      const todosIndex = tagsAtivas.indexOf('todos');
      if (todosIndex > -1 && tagsAtivas.length > 1) {
        tagsAtivas.splice(todosIndex, 1);
        document.getElementById('filtro-todos').checked = false;
      }
      
      // Se nenhum filtro estiver ativo, volta para 'todos'
      if (tagsAtivas.length === 0) {
        tagsAtivas = ['todos'];
        document.getElementById('filtro-todos').checked = true;
      }
    }
    
    aplicarFiltros();
  }
  
  function aplicarFiltros() {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
      const cardTags = card.dataset.tags.split(' ');
      const deveMostrar = tagsAtivas.includes('todos') || 
                         tagsAtivas.some(tag => cardTags.includes(tag));
      
      card.style.display = deveMostrar ? 'block' : 'none';
    });
    
    atualizarTagsAtivas();
  }
  
  function atualizarTagsAtivas() {
    const container = document.getElementById('tagsAtivas');
    container.innerHTML = '';
    
    if (!tagsAtivas.includes('todos')) {
      tagsAtivas.forEach(tag => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag-ativa';
        tagElement.innerHTML = `
          ${getTagName(tag)}
          <button class="remover-tag" onclick="removerTag('${tag}')" aria-label="Remover filtro">×</button>
        `;
        container.appendChild(tagElement);
      });
    }
  }
  
  function getTagName(tag) {
    const tagNames = {
      'seguranca': 'Segurança',
      'colaborador': 'Colaborador',
      'etica': 'Ética'
    };
    return tagNames[tag] || tag;
  }
  
  function removerTag(tag) {
    const index = tagsAtivas.indexOf(tag);
    if (index > -1) {
      tagsAtivas.splice(index, 1);
      
      // Atualiza o checkbox correspondente
      const checkbox = document.querySelector(`#filtro-${tag}`);
      if (checkbox) checkbox.checked = false;
      
      // Se não houver mais tags, mostra todos
      if (tagsAtivas.length === 0) {
        tagsAtivas = ['todos'];
        document.getElementById('filtro-todos').checked = true;
      }
      
      aplicarFiltros();
    }
  }
  
  // Evento de pesquisa
  document.getElementById("search").addEventListener("input", function() {
    const valor = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
      const texto = card.innerText.toLowerCase();
      const cardTags = card.dataset.tags.split(' ');
      
      const deveMostrar = texto.includes(valor) && 
                         (tagsAtivas.includes('todos') || 
                          tagsAtivas.some(tag => cardTags.includes(tag)));
      
      card.style.display = deveMostrar ? "block" : "none";
    });
  });
  
  // Eventos do modal de filtros
  document.getElementById("toggleFiltros").addEventListener('click', function() {
    document.getElementById("modalFiltros").classList.add("active");
  });
  
  document.getElementById("fecharFiltros").addEventListener('click', function() {
    document.getElementById("modalFiltros").classList.remove("active");
  });
  
  // Fechar modal clicando fora
  document.addEventListener('click', function(e) {
    const modal = document.getElementById('modalFiltros');
    if (!e.target.closest('#modalFiltros') && 
        !e.target.closest('#toggleFiltros') &&
        modal.classList.contains('active')) {
      modal.classList.remove("active");
    }
  });