/* =========================================================
   OS MEUS PROJETOS
   ---------------------------------------------------------
   Para JUNTAR um projeto novo:
   1. Copia um bloco { ... }, desde a chaveta { até à },
   2. Cola-o por baixo do último e põe uma vírgula entre os blocos
   3. Muda os textos entre aspas '...'

   Campos de cada projeto:
     titulo     → nome do projeto
     contexto   → onde/quando o fizeste (ex.: 'Projeto pessoal · 2026')
     descricao  → 1 ou 2 frases sobre o que faz
     tecnologias→ lista: ['OutSystems', 'SQL']
     imagem     → (opcional) captura de ecrã. Carrega a imagem para a
                  pasta "imagens" e escreve: 'imagens/nome-da-imagem.png'
     desenho    → (se não tiveres imagem) um destes:
                  'migrar', 'api', 'sql', 'app', 'n8n', 'web'
     links      → (opcional) lista de botões:
                  [['Ver código', 'https://github.com/...'],
                   ['Ver app', 'https://....outsystemscloud.com/...']]

   Atenção: textos com apóstrofo (') devem usar aspas "..."
   ========================================================= */

const GITHUB = 'https://github.com/Nouhaila-Eessalmi/';

const projetos = [
  {
    titulo: 'EnglishCoach · plano de estudo criado por um agente de IA',
    contexto: 'Projeto final do curso de agentes · OutSystems · 2026',
    descricao: 'O aluno escolhe o objetivo, o nível, os dias e os minutos por dia. Um workflow chama o agente StudyCoach, que cria um plano de estudo de inglês dia a dia.',
    tecnologias: ['OutSystems', 'Agente de IA', 'Workflow', 'Eventos', 'Reactive Web'],
    imagem: 'englishcoach-1-lista.png',
   links: [['Ver como funciona', 'englishcoach.html'], ['Experimentar a app', 'https://personal-gc9fib9t-dev.outsystems.app/EnglishCoach/']]
  },
  {
    titulo: 'Migração Traditional Web → Reactive Web',
    contexto: 'Estágio · MC Digital (Sonae) · 2026',
    descricao: 'Migrei aplicações para o modelo Reactive e adaptei ecrãs, lógica e interface. O resultado são apps mais rápidas e modernas.',
    tecnologias: ['OutSystems 11', 'Reactive Web', 'UI'],
    desenho: 'migrar'
  },
  {
    titulo: 'Integrações com REST APIs',
    contexto: 'Estágio · MC Digital (Sonae) · 2026',
    descricao: 'Expus e consumi serviços REST para trocar dados entre aplicações OutSystems e sistemas externos.',
    tecnologias: ['REST', 'JSON', 'Integração'],
    desenho: 'api'
  },
  {
    titulo: 'Consultas SQL e Aggregates otimizados',
    contexto: 'Estágio e formação · 2026',
    descricao: 'Escrevi queries SQL avançadas e Aggregates para tornar as consultas à base de dados mais rápidas.',
    tecnologias: ['T-SQL', 'Aggregates', 'Performance'],
    desenho: 'sql'
  },
  {
    titulo: 'Yalla Arabic',
    contexto: 'Projeto pessoal · App mobile',
    descricao: 'App para registar alunos e organizar aulas e marcações, criada a partir da minha experiência como professora de árabe.',
    tecnologias: ['Kotlin', 'Mobile'],
    desenho: 'app',
    links: [['Ver código', GITHUB + 'yalla-arabic']]
  },
  {
    titulo: 'Automações com n8n',
    contexto: 'Formação complementar · 2026',
    descricao: 'Criei fluxos de trabalho que ligam aplicações entre si e automatizam tarefas repetitivas.',
    tecnologias: ['n8n', 'Workflows'],
    desenho: 'n8n'
  },
  {
    titulo: 'Página pessoal em HTML e CSS',
    contexto: 'Projeto de formação',
    descricao: 'A minha primeira página pessoal, feita de raiz com HTML e CSS, com layout responsivo.',
    tecnologias: ['HTML5', 'CSS3'],
    desenho: 'web',
    links: [['Ver código', GITHUB + 'pagina-pessoal-html']]
  }

  /* EXEMPLO de projeto com imagem. Para o usar, apaga esta linha
     e a linha com o fecho do comentário no fim do exemplo.
  ,{
    titulo: 'Gestão de Alunos',
    contexto: 'Projeto CESAE · OutSystems Reactive · 2026',
    descricao: 'App para gerir alunos, turmas e presenças, com login e dashboard.',
    tecnologias: ['OutSystems', 'Reactive Web', 'SQL'],
    imagem: 'imagens/gestao-alunos.png',
    links: [['Ver app', 'https://o-teu-link.outsystemscloud.com/GestaoAlunos']]
  }
  */
];

/* ===== COMPETÊNCIAS ===== */
const competencias = [
  ['OutSystems', ['Service Studio', 'OutSystems 11', 'Reactive Web', 'Traditional Web', 'Mobile', 'Screens & Blocks', 'Server/Client Actions', 'Aggregates']],
  ['Integração', ['REST APIs (Expose/Consume)', 'JSON', 'Serviços web']],
  ['Bases de dados', ['SQL avançado', 'T-SQL', 'Modelação de dados', 'Entities', 'Otimização de queries']],
  ['Front-end', ['HTML5', 'CSS3', 'JavaScript', 'UI/UX', 'Design responsivo']],
  ['Automação', ['n8n', 'Workflows', 'Integração entre apps']],
  ['Engenharia de software', ['Algoritmia', 'POO', 'Análise de sistemas', 'Ágil', 'Testes', 'Documentação']]
];

/* ===== EXPERIÊNCIA: [quando, título, detalhe] ===== */
const experiencia = [
  ['jun – set 2026', 'Estagiária OutSystems · MC Digital (Sonae)', 'Porto · estágio de 420 h: migração para Reactive, REST APIs, SQL, trabalho em equipa.'],
  ['2022 – presente', 'Tradutora jurídica (árabe ↔ português)', 'Freelance · tradução de documentos legais e paginação (DTP).'],
  ['2022 – presente', 'Professora de árabe', 'Freelance · SuperProf e Ginásio Da Vinci, níveis A1–B1.'],
  ['2017 – 2019', 'Professora de árabe', 'Marrocos · ensino básico e secundário.']
];

/* ===== FORMAÇÃO: [quando, título, detalhe] ===== */
const formacao = [
  ['jan – set 2026', 'Programador/a Low-Code · OutSystems', 'CESAE Digital, Porto · 1100 h: Reactive, Web, Mobile, T-SQL, HTML/CSS/JS, POO.'],
  ['set – out 2026', 'Cursos n8n', 'Conceitos essenciais e guia rápido.'],
  ['abr 2025', 'Desktop Publishing for Language Services', 'Translators without Borders.'],
  ['2014 – 2017', 'Licenciatura em Didática do Texto Literário e Linguístico', 'École Normale Supérieure, Univ. Mohammed V, Rabat.']
];
