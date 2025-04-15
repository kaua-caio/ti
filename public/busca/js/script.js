document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const searchInput = document.getElementById('search-input');
    const filterButton = document.getElementById('filter-button');
    const filtersSidebar = document.getElementById('filters-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const resultsContainer = document.getElementById('results-container');
    const setorFilter = document.getElementById('setor-filter');
    const cargoFilter = document.getElementById('cargo-filter');
    const notification = document.getElementById('notification');
    const aiAssistant = document.getElementById('ai-assistant');
    const aiChat = document.getElementById('ai-chat');
    const chatClose = document.getElementById('chat-close');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const leftEye = document.querySelector('.left-eye');
    const rightEye = document.querySelector('.right-eye');
    const aiMouth = document.querySelector('.ai-mouth');

    // Dados de exemplo
    const colaboradores = [
        { 
            nome: 'Alana Capriolli', 
            email: 'alana.capriolli@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: 'RH', 
            cargo: 'RH recruter',
            initials: 'AC'
        },
        { 
            nome: 'Aline Stocco', 
            email: 'alinestocco@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: 'Relacionamento com o cliente',
            cargo: 'SAC',
            initials: 'AE'
        },
        { 
            nome: 'Aline Oliveira', 
            email: 'aline.oliveira@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: 'Administrativo', 
            cargo: 'analista',
            initials: 'AO'
        },
        { 
            nome: 'Aline Cristo', 
            email: 'aline.cristo@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: 'AC'
        },
        { 
            nome: 'Alison Guerra', 
            email: 'alison@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: 'marketing', 
            cargo: 'VideoMaker',
            initials: 'AG'
        },
        { 
             nome: 'Allan Godoy',
    email: 'allan@greenn.com.br',
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Amanda Brito',
            email: 'amanda@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },

        { 
           nome: 'Ana Carolina',
            email: 'ana.carolina@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
           nome: 'Ana Franca',
    email: 'ana.franca@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Ana Maria Miguel',
    email: 'ana.miguel@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Ana Paula Maximiano',
    email: 'anapaula@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Angélica Arruda',
    email: 'angelica.arruda@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Anthony Andrade Oliveira',
    email: 'anthony.oliveira@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Ataide Luan Nunes Da Silva Neto',
    email: 'ataide.neto@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'AtendimentoGreenn',
    email: 'atendimento@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Barbara Metzner',
    email: 'barbara.metzner@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Bianca Santana',
    email: 'bianca@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Brenda Meireles',
    email: 'brenda.meireles@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Bruna Giseli Barbosa',
    email: 'bruna.barbosa@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Caio Bolognese',
    email: 'caio.bolognese@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Carlos Massucato',
    email: 'carlos.massucato@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Carlos Silva Araújo',
    email: 'carlos.davi@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Daiani Silva',
    email: 'daiani.silva@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Daise de Oliveira Souza Bassani',
    email: 'daise.oliveira@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Danilo Macedo',
    email: 'danilo@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Dario Coutinho',
    email: 'dario.coutinho@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Dawan Santana Lago',
            email: 'dawan.lago@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Diogo Jorge',
    email: 'diogo.jorge@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Dionei Santos',
    email: 'dionei.beilke@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Douglas Rocha',
    email: 'douglas.rocha@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Douglas Martins',
    email: 'douglas.martins@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Eduardo Pereira',
    email: 'eduardo.nicolau@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Eduardo Brito',
    email: 'eduardo@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Eduardo Zempulski',
    email: 'edu@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nnome: 'Eduardo Nicola Possani',
            email: 'eduardo.possani@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Eduardo Bispo dos Santos',
    email: 'eduardo.bispo@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Elaine Cristina',
            email: 'elaine@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Emerson Gomes',
            email: 'emerson@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Eric Motta',
    email: 'eric@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Erick dantas',
    email: 'erick@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Everton Duarte',
    email: 'everton.duarte@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Felipe Cerqueira',
    email: 'felipe@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        }, { 
            nome: 'Felipe Bertaggi',
    email: 'felipe.bertaggi@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },{ 
            nome: 'Flavio Zamprone',
    email: 'flavio@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Franciele Silva',
    email: 'franciele.silva@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Gabriel Reis',
            email: 'gabriel.reis@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nnome: 'Gabriel Rockenbach',
            email: 'gabriel@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Gabriel Oliveira',
    email: 'gabriel.oliveira@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Gabriela Pinheiro',
    email: 'gabriela@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Gabrielle Souza',
    email: 'gabrielle.souza@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Geovana Duarte',
    email: 'geovana@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Giovana Pereira',
            email: 'giovana.elidia@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Guilherme Campaner',
            email: 'guilherme@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Gustavo Silva',
    email: 'gustavo.silva@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Gustavo Reichle',
    email: 'gustavo.demori@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Hemilly Costa',
    email: 'hemilly.costa@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Higor Moor',
            email: 'hygor.moor@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Isabele Oliveira',
    email: 'isabele.oliveira@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Isabella Nicolau',
            email: 'isabella@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Isadora Arpini',
            email: 'isadora.arpini@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Iuri Cerqueira',
    email: 'iuri.cerqueira@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Ivanici Zorzanello',
    email: 'ivanici.zorzanello@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Jaine Martins',
    email: 'jaine.martins@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Jair Derio Boeing',
            email: 'jair.augusto@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Jedsonda Silva',
    email: 'jedson.silva@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Jeferson Silveira',
            email: 'jefersonsilveira@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Jeferson Medeiros',
    email: 'jeferson@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Jessica Maiara',
    email: 'jessica@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Jessica Fernandes',
            email: 'jessica.fernandes@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Jhonny Silva',
    email: 'jhonny.silva@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Joao Domingues',
    email: 'joao@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Joao Oliveira Rocha',
            email: 'joao.oliveira@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'José Sampaio',
    email: 'jose.sampaio@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'João Henrique Cunha',
            email: 'joao.cunha@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'João Lucas de Araujo',
            email: 'joao.lucas@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'João Paulo Duarte',
    email: 'duarte@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'João Victor Ramos',
            email: 'joao.ramos@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'João Victor Faria',
    email: 'joao.faria@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Julio Yamada',
            email: 'julio.yamada@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Júlia Alves',
    email: 'julia.goulart@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },{ 
            nome: 'Kauany Paz',
    email: 'kauany.maria@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },{ 
            nome: 'Kauã Lima',
    email: 'kaua.lima@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Kevin Storti',
            email: 'kevin.storti@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lais Magalhaes',
            email: 'lais.magalhaes@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Larissa Gabrielados Santos',
    email: 'larissa.girotto@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Leandra Miranda',
    email: 'leandra.miranda@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lorrayne Breves',
    email: 'lorrayne.breves@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lucas Roldam',
    email: 'lucas.ferracini@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lucas Chicarelle',
            email: 'lucas.chicarelle@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lucas Castro Profissional',
    email: 'lucas@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lucas Assunção',
    email: 'assuncao@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lucas Paulino',
            email: 'lucas.paulino@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Ludymila Américo',
            email: 'ludymila@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Luiz Shiguemoto',
    email: 'luiz.shiguemoto@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Luiz Barboza',
            email: 'luiz.barboza@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lyandra Lopes de Moraes',
    email: 'lyandra.moraes@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Lyandra Lopes de Moraes',
    email: 'lyandra.nicolle@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Manoela Sanches',
            email: 'manoela@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Marcelo Silva',
            email: 'marcelo@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Marcus Serrador',
            email: 'marcus.serrador@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Maria da Silva',
            email: 'maria.inez@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Maria Marinho',
            email: 'maria.clara@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Maria Eduarda Silva',
    email: 'maria.silva@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Mateus Lansa',
    email: 'mateus@greenn.com.br', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
        { 
            nome: 'Matheus Gimenes',
    email: 'matheus.amorim@greenn', 
            chatLink: 'https://chat.google.com', 
            setor: '', 
            cargo: '',
            initials: ''
        },
       



    ];

    // Mostrar/ocultar sidebar de filtros
    function toggleSidebar() {
        filtersSidebar.classList.toggle('active');
    }

    // Mostrar notificação
    function showNotification() {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2500);
    }

    // Aplicar filtros
    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const setor = setorFilter.value;
        const cargo = cargoFilter.value;
    
        // Se não há termo de busca nem filtros aplicados, não mostra resultados
        if (!searchTerm && !setor && !cargo) {
            resultsContainer.innerHTML = `
                <div class="empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <p>Use a busca ou filtros para encontrar colaboradores</p>
                </div>
            `;
            return;
        }
    
        const filtered = colaboradores.filter(colaborador => {
            const matchesSearch = 
                colaborador.nome.toLowerCase().includes(searchTerm) || 
                colaborador.email.toLowerCase().includes(searchTerm) ||
                (colaborador.setor && colaborador.setor.toLowerCase().includes(searchTerm));
            
            const matchesSetor = !setor || colaborador.setor === setor;
            const matchesCargo = !cargo || colaborador.cargo === cargo;
    
            return matchesSearch && matchesSetor && matchesCargo;
        });
    
        displayResults(filtered);
        
        // Se estiver no mobile, fecha o sidebar após aplicar filtros
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    }
    // Exibir resultados
    function displayResults(results) {
        resultsContainer.innerHTML = '';
        
        if (results.length === 0) {
            // Mostra mensagem apropriada
            const hasFilters = searchInput.value || setorFilter.value || cargoFilter.value;
            
            resultsContainer.innerHTML = `
                <div class="empty-state">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
                    </svg>
                    <p>${hasFilters ? 'Nenhum colaborador encontrado' : 'Use a busca ou filtros para encontrar colaboradores'}</p>
                </div>
            `;
            return;
        }
        
        
        results.forEach((colaborador, index) => {
            const departmentNames = {
                'marketing': 'Marketing',
                'tecnologia': 'Tecnologia',
                'rh': 'Recursos Humanos',
                'financeiro': 'Financeiro'
            };

            const card = document.createElement('div');
            card.className = 'collaborator-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <div class="collaborator-info">
                    <div class="collaborator-avatar">${colaborador.initials}</div>
                    <div class="collaborator-details">
                        <div class="collaborator-name">${colaborador.nome}</div>
                        <div class="collaborator-email">${colaborador.email}</div>
                        <span class="collaborator-department">${departmentNames[colaborador.setor] || colaborador.setor}</span>
                    </div>
                </div>
                <div class="collaborator-actions">
                    <button class="action-button secondary copy-btn" data-email="${colaborador.email}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copiar
                    </button>
                    <button class="action-button primary chat-btn" data-link="${colaborador.chatLink}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        Chat
                    </button>
                </div>
            `;
            
            resultsContainer.appendChild(card);
        });

        // Adicionar eventos aos botões
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const email = e.currentTarget.getAttribute('data-email');
                navigator.clipboard.writeText(email)
                    .then(() => {
                        showNotification();
                        animateRobot('happy');
                    })
                    .catch(err => console.error('Erro ao copiar email:', err));
            });
        });

        document.querySelectorAll('.chat-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const chatLink = e.currentTarget.getAttribute('data-link');
                window.open(chatLink, '_blank');
            });
        });
    }

    // Animar o robô
    function animateRobot(emotion) {
        switch(emotion) {
            case 'happy':
                // Olhos mais fechados e sorriso
                leftEye.style.height = '6px';
                leftEye.style.borderRadius = '3px';
                rightEye.style.height = '6px';
                rightEye.style.borderRadius = '3px';
                aiMouth.style.width = '24px';
                aiMouth.style.height = '10px';
                aiMouth.style.borderRadius = '0 0 12px 12px';
                break;
            case 'speaking':
                // Boca aberta
                aiMouth.style.width = '16px';
                aiMouth.style.height = '6px';
                aiMouth.style.borderRadius = '4px';
                break;
            case 'normal':
            default:
                // Volta ao normal
                leftEye.style.height = '12px';
                leftEye.style.borderRadius = '50%';
                rightEye.style.height = '12px';
                rightEye.style.borderRadius = '50%';
                aiMouth.style.width = '20px';
                aiMouth.style.height = '8px';
                aiMouth.style.borderRadius = '4px';
        }
    }

    // Mostrar/ocultar chat
    function toggleChat() {
        aiChat.classList.toggle('active');
        if (aiChat.classList.contains('active')) {
            animateRobot('happy');
        } else {
            animateRobot('normal');
        }
    }

    // Adicionar mensagem ao chat
    function addMessage(text, isUser = false) {
        const message = document.createElement('div');
        message.className = 'chat-message';
        
        const messageContent = document.createElement('div');
        messageContent.className = isUser ? 'user-message' : 'bot-message';
        messageContent.textContent = text;
        
        message.appendChild(messageContent);
        chatBody.appendChild(message);
        
        // Rolagem automática
        chatBody.scrollTop = chatBody.scrollHeight;
        
        // Animar robô
        if (!isUser) {
            animateRobot('speaking');
            setTimeout(() => animateRobot('happy'), 1000);
        }
    }

    // Processar mensagem do usuário
    function processUserMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;
        
        addMessage(message, true);
        chatInput.value = '';
        
        // Resposta do bot baseada no número digitado
        setTimeout(() => {
            switch(message) {
                case '1':
                    addMessage("Para encontrar um colega, você pode:\n\n1️⃣ - Buscar por nome\n2️⃣ - Filtrar por departamento\n3️⃣ - Filtrar por cargo\n\nDigite o número correspondente à opção desejada:");
                    break;
                case '2':
                    addMessage("Nossos departamentos:\n\n🏢 Marketing\n💻 Tecnologia\n👥 Recursos Humanos\n💰 Financeiro\n\nDigite o nome do departamento para saber mais ou 0 para voltar:");
                    break;
                case '3':
                    addMessage("Como usar a plataforma:\n\n1️⃣ - Use a barra de busca para encontrar colegas\n2️⃣ - Clique em 'Filtros' para refinar sua pesquisa\n3️⃣ - Copie emails ou inicie chats diretamente\n\nDigite 0 para voltar ao menu principal");
                    break;
                case '4':
                    addMessage("Para outras dúvidas, entre em contato com o RH pelo email rh@empresa.com ou digite sua pergunta específica.");
                    break;
                case '0':
                    addMessage("Menu principal. Como posso te ajudar?\n\n1️⃣ - Encontrar um colega\n2️⃣ - Saber sobre departamentos\n3️⃣ - Aprender a usar a plataforma\n4️⃣ - Outras dúvidas");
                    break;
                default:
                    if (message.toLowerCase().includes('marketing')) {
                        addMessage("O departamento de Marketing é responsável por:\n- Estratégias de marca\n- Campanhas publicitárias\n- Mídias sociais\n\nColaboradores: Ana Silva e Carla Rocha\n\nDigite 0 para voltar");
                    } else if (message.toLowerCase().includes('tecnologia') || message.toLowerCase().includes('ti')) {
                        addMessage("O departamento de Tecnologia cuida de:\n- Desenvolvimento de sistemas\n- Infraestrutura de TI\n- Segurança da informação\n\nColaboradores: Pedro Oliveira e Lucas Pereira\n\nDigite 0 para voltar");
                    } else if (message.toLowerCase().includes('rh') || message.toLowerCase().includes('recursos humanos')) {
                        addMessage("O RH é responsável por:\n- Recrutamento e seleção\n- Benefícios\n- Desenvolvimento de pessoas\n\nColaboradora: Mariana Souza\n\nDigite 0 para voltar");
                    } else if (message.toLowerCase().includes('financeiro')) {
                        addMessage("O Financeiro gerencia:\n- Contas a pagar/receber\n- Orçamento\n- Relatórios financeiros\n\nColaborador: João Santos\n\nDigite 0 para voltar");
                    } else {
                        addMessage("Não entendi sua mensagem. Por favor, digite o número correspondente à opção desejada:\n\n1️⃣ - Encontrar um colega\n2️⃣ - Saber sobre departamentos\n3️⃣ - Aprender a usar a plataforma\n4️⃣ - Outras dúvidas\n\nOu digite 0 para ver o menu principal");
                    }
            }
        }, 800);
    }

    // Event listeners
    filterButton.addEventListener('click', toggleSidebar);
    closeSidebar.addEventListener('click', toggleSidebar);
    searchInput.addEventListener('input', applyFilters);
    applyFiltersBtn.addEventListener('click', function() {
        applyFilters();
        // Não precisa mais do toggleSidebar() aqui pois já está sendo tratado no applyFilters()
    });    setorFilter.addEventListener('change', applyFilters);
    cargoFilter.addEventListener('change', applyFilters);
    aiAssistant.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);
    chatSend.addEventListener('click', processUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            processUserMessage();
        }
    });

    // Seguir o mouse com os olhos
    document.addEventListener('mousemove', (e) => {
        if (!aiAssistant) return;
        
        const rect = aiAssistant.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const distance = Math.min(3, Math.sqrt(
            Math.pow(e.clientX - centerX, 2) + 
            Math.pow(e.clientY - centerY, 2)
        ) / 50);
        
        const eyeOffsetX = Math.cos(angle) * distance;
        const eyeOffsetY = Math.sin(angle) * distance;
        
        leftEye.style.transform = `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`;
        rightEye.style.transform = `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`;
    });

    
});