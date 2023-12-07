const express = require('express');
const app = express();
const port = 3000;

//let lista= ["peixe", "brocolis", "mortadela", 1, 3, "pao"]
const cards = function(tudo){
  for( i=0; tudo.index == i; i++){
    return`
    
    `
  }
}

app.set('view engine', 'ejs');
app.use(express.static('public'));

const listas = [
  {
    "id": 1,
    "nome": "The Witcher 3: Wild Hunt",
    "preco": "43,78",
    "descricao": "Embarque em uma jornada épica neste RPG de ação que coloca os jogadores no papel de Geralt de Rívia, um caçador de monstros profissional. Sua busca pela filha adotiva leva a escolhas morais impactantes em um vasto mundo aberto.",
    "imagem": "witcher.jpg"
  },
  {
    "id": 2,
    "nome": "Final Fantasy XV",
    "preco": "27,99",
    "descricao": "Explore uma jornada épica de um príncipe e seus amigos neste RPG de ação e fantasia. Com uma história emocionante, personagens cativantes e um sistema de combate dinâmico, mergulhe em um mundo fascinante.",
    "imagem": "final.jpg"
  },
  {
    "id": 3,
    "nome": "Divinity: Original Sin 2",
    "preco": "37,50",
    "descricao": "Viva uma experiência única neste RPG isométrico. Com uma narrativa rica e complexa e mecânicas de combate táticas, os jogadores podem explorar um mundo aberto, fazer escolhas significativas e até mesmo jogar cooperativamente.",
    "imagem": "divinity.jpg"
  },
  {
    "id": 4,
    "nome": "Persona 5",
    "preco": "30,00",
    "descricao": "Descubra um mundo onde um helicóptero feito pela NAZ voa e as crianças olham para o alto. Embarque nesta experiência única e surreal neste RPG de realidade alternativa.",
    "imagem": "persona.avif"
  },
  {
    "id": 5,
    "nome": "Mass Effect Legendary Edition",
    "preco": "50,00",
    "descricao": "Mergulhe em uma jornada espacial nesta edição lendária da trilogia Mass Effect. Com uma narrativa envolvente e escolhas morais, esta edição já vem 'montada' para sua conveniência.",
    "imagem": "mass.jpg"
  },
  {
    "id": 6,
    "nome": "Dragon Age: Inquisition",
    "preco": "20,00",
    "descricao": "Um RPG de fantasia que coloca os jogadores no papel de um inquisidor encarregado de salvar o mundo de uma ameaça sobrenatural. O jogo apresenta um vasto mundo aberto, decisões morais e um sistema de combate estratégico.",
    "imagem": "dragon.jpg"
  },
  {
    "id": 7,
    "nome": "Dark Souls III",
    "preco": "35,00",
    "descricao": "Conhecido por sua dificuldade desafiadora, Dark Souls III é um RPG de ação que combina combate preciso, ambientes sombrios e uma narrativa obscura. Os jogadores exploram um mundo interconectado, enfrentando inimigos temíveis.",
    "imagem": "dark.jpg"
  },
  {
    "id": 8,
    "nome": "Kingdom Come: Deliverance",
    "preco": "50,00",
    "descricao": "Experimente a limpeza impecável com este RPG de mundo aberto realista e historicamente preciso. Limpa tão bem que, se você passar a língua no chão, pode acabar com gosto de Veja na boca e talvez até doente.",
    "imagem": "kindon.png"
  },
  {
    "id": 9,
    "nome": "Path of Exile",
    "preco": "00,00",
    "descricao": "Explore um mundo sombrio e perigoso neste RPG de ação online gratuito. Com foco em exploração de masmorras, personalização profunda de personagens e um extenso sistema de habilidades, Path of Exile oferece uma experiência desafiadora.",
    "imagem": "path.png"
  },  
  {
    "id": 10,
    "nome": "Cyberpunk 2077",
    "preco": "60,00",
    "descricao": "Um RPG de mundo aberto ambientado em um futuro distópico, onde os jogadores assumem o papel de V, um mercenário em busca da imortalidade. O jogo apresenta uma cidade vibrante, escolhas éticas complexas e um enredo envolvente.",
    "imagem": "2077.jpeg"
  }
]




app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produto/:id', (req, res) => {
  const ID= req.params.id
  res.render('produto', { message: 'Olá, Mundo!', ID: ID, listas: listas});
});


app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!', listas: listas});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});