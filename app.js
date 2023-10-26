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
 {id: 1, nome: "peixe", preco: "43,78", descricao: "jdhdsjhfcgsgh aigfvy iuctdbsf vybgsdufgtsjy dfgticwagug.", imagem: "peixes.jpg"},
 {id: 2, nome: "Coentro", preco: "2,20", descricao: "Tum pero para comida, muito verde tambem chamada de cheiro verde.", imagem: "coentro.jpg"},
 {id: 3, nome: "Don Quixote", preco: "45,78", descricao: "Livro legal, escrito legal e de forma legal.", imagem: "donquichote.jpg"},
 {id: 4, nome: "Helicoptero", preco: "9.000", descricao: "Um helicoptero feito pela NAZ que voa e as crianças olham pra cima.", imagem: "helicoptero.jpg"},
 {id: 5, nome: "Pc Gamer", preco: "5.500", descricao: "Pra voce que tem preguiça de montar um, ja vem montado.", imagem: "pc.jpg"},
 {id: 6, nome: "Tenis Balenciaga", preco: "9.000", descricao: "O que compença um tenis todo esbagaçado ou um Helicoptero reflita.", imagem: "tenesbalanco.jpg"},
 {id: 7, nome: "Motor V8", preco: "3.500", descricao: "Vrumm Vrrum VRRUMMMM VRummm e so vendemos o motor o carro ignorem.", imagem: "v8.jpg"},
 {id: 8, nome: "Veja limpador de vidros", preco: "5,00", descricao: "Limpa tao bem se voce passar a lingua no chão voce fica com gosto de veja na boca e talvez doente.", imagem: "veja.png"},
 {id: 9, nome: "Picole sabor morango", preco: "1,00", descricao: "Sabor gostoso compre.", imagem: "morango.png"},
 {id: 10, nome: "Pr. Piccolo", preco: "00,01", descricao: "Um professor meio calvo.", imagem: "professor.jpeg"},
 ]



app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});

app.get('/produto', (req, res) => {
  res.render('produto', { message: 'Olá, Mundo!', foi: "prontooooooooooooooooo" });
});


app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!', lista: ["peixe", "brocolis", "mortadela", 1, 3, "pao"], lak: ["/produto"]});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});