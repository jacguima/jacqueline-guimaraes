const reviews = [
  {
    author: "Alice",
    content:
      "Faz já mais de um mês que tenho consulta com a Jacqueline e simplesmente amei ela desde o primeiro dia! Um amor de pessoa, muito atenciosa e sempre me ajuda. Obrigada Jacqueline!",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Gabriela",
    content:
      "Sentimento de acolhimento, ótima troca de ideias e sem julgamentos. Tratamento excelente. 🤍🤍",
    link: "https://g.co/kgs/oPJWv7D",
  },
  {
    author: "Agda",
    content:
      "A doutora Jacqueline Guimarães é uma excelente profissional, tem escuta ativa, me auxiliou em uma demanda muito complicada, sempre com respeito ao meu sentimento e empatia.",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Leci",
    content:
      "Adoro ela! Sofria de uma ansiedade forte mas depois que comecei o tratamento com ela processo muito melhor minhas emoções. Obrigada minha psicóloga.",
    link: "https://g.co/kgs/Mtsp24u",
  },
  {
    author: "Ana",
    content:
      "Estou fazendo terapia de casal com o meu marido, e nossa primeira consulta foi excelente! A Dra Jacqueline nos deixou bem livre para expor nossas inseguranças e no final dessa primeira sessão já nos passou um exercício, tenho certeza que esse acompanhamento terapêutico trará bons frutos ao meu casamento, gratidão doutra!",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Aline",
    content: "Profissional excelente!!Simpática e atenciosa. Recomendo muito!!",
    link: "https://g.co/kgs/MTYPbgs",
  },
  {
    author: "Rayanne",
    content: "Excelente profissional, atenciosa e muito fofa!!!!",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Victor",
    content:
      "Excelente profissional! Mais de 1 ano de muito comprometimento, me deixou à vontade desde a primeira sessão, me ajuda em diversas coisas e sinto que cresci em todas as áreas da minha vida nesse tempo. Recomendo demais!",
    link: "https://g.co/kgs/efw31F5",
  },
  {
    author: "Arthur",
    content:
      "Primeiro atendimento bastante satisfatório. Estou confiante para dar continuidade ao tratamento.",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Yasmin",
    content:
      "A Jacque é atenciosa, realista e jeitosa. Há 2 anos ela me atende, e eu já fui do 8 a 80, e ela sempre me atendeu bem, com carinho, compreensão, cuidado e gentileza, me fazendo amadurecer e crescer bastante. Como uma pessoa que já passou por muitos profissionais da área da psicologia, fico feliz em dizer que ela é uma das melhores psicólogas que já me atenderam.",
    link: "https://g.co/kgs/nonJ2aw",
  },
  {
    author: "Wellington",
    content:
      "Muito atenciosa, comunicativa! Se preocupa em deixar o ambiente confortável, te trás confiança, preocupada em te dar conforto, simpática!",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Maria",
    content:
      "Dra. Jacqueline é uma excelente profissional! Sempre muito simpática, atenciosa e empática! Recomendo o seu atendimento de olhos fechados",
    link: "https://g.co/kgs/DxJihKs",
  },
  {
    author: "Ana",
    content: "Ótima consulta! Me senti muito confortável em conversar com ela.",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Brenda",
    content:
      "…sempre era muito fluido conversar sobre o que estivesse me passando pela cabeça, a Jacqueline sempre se mostrou muito prestativa e uma ótima ouvinte, sinto que cresci muito durante esse meio tempo que fiz esse acompanhamento e agradeço imensamente por todo esse período que dedicamos ao autoconhecimento e a lidar com minhas emoções e a das outras pessoas ao meu redor!! Muito grata mesmo.",
    link: "https://g.co/kgs/kbuvgLC",
  },
  {
    author: "William",
    content:
      "Gostei bastante do atendimento da Jacque. Demonstra bastante atenção e passa um sentimento de cuidado e acolhimento necessário para um psicólogo. Gostei!",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Bruna",
    content: "Excelente profissional. Muito resiliente, humana e acolhedora.",
    link: "https://g.co/kgs/tDjXfc9",
  },
  {
    author: "João",
    content:
      "Sou muito grato por ter conhecido a dr.a Jacqueline! Ela me ajudou a evoluir muito como ser humano, e me ensinou bastante sobre trabalhar a minha individualidade e controlar minhas emoções. Sem dúvidas, a melhor psicóloga que já conheci!!!! Parabéns pela excelência e competência.",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Rayanne",
    content:
      "Ela é psicóloga da minha filha de 6 anos, tem uma didática incrível para lidar com ela, além de toda a sensibilidade em torno da história e acontecimentos! Conduz muito bem as análises para que minha filha tenha a percepção necessária e de acordo com a idade. Ela foi a melhor escolha que pude fazer nesse processo para a minha filha!",
    link: "https://g.co/kgs/oZ8mFfQ",
  },
  {
    author: "Kedma",
    content:
      "Consultas excelentes! Jaqueline é extremamente educada e competente. As conversas com ela estão sendo bem proveitosas e necessárias pra mim. Estou gostando muito!",
    link: "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia",
  },
  {
    author: "Alícia",
    content:
      "A dra. Jacqueline me ajudou num momento em que eu achei que não tinha mais sentido estar aqui. Me motiva a cada sessão a ser uma pessoa melhor, com as minhas próprias decisões mas vistas sempre de um ângulo diferente. Sempre que saio da sessão sinto que sou capaz de fazer qualquer coisa. Me auxiliou com diagnósticos que eu só pensava que poderiam existir e me fez entender que eu sou assim mesmo, independente do que os outros achem. Indico a dra. Jacqueline para todos e qualquer pessoa, pois ela é muito especial!",
    link: "https://g.co/kgs/cb7oPxX",
  },
];

export default reviews;
