const express = require('express');
const app = express();
const port = 3000;

//let lista= ["peixe", "brocolis", "mortadela", 1, 3, "pao"]
const aleatorio= function(){
  
}

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
 {id: 1, nome: "peixe", preco: "43,78", descricao: "jdhdsjhfcgsgh aigfvy iuctdbsf vybgsdufgtsjy dfgticwagug", imagem: "peixe.jpg"},
 {id: 2, nome: "Coentro", preco: "2,20", descricao: "", imagem: ".jpg"},
 {id: 3, nome: "Don Quixote", preco: "45,78", descricao: "", imagem: ".jpg"},
 {id: 4, nome: "Helicoptero", preco: "9.000", descricao: "", imagem: ".jpg"},
 {id: 5, nome: "Pc Gamer", preco: "5.500", descricao: "", imagem: ".jpg"},
 {id: 6, nome: "Tenis Balenciaga", preco: "9.000", descricao: "", imagem: ".jpg"},
 {id: 7, nome: "Motor V8", preco: "", descricao: "3.500", imagem: ".jpg"},
 {id: 8, nome: "Veja limpador de vidros", preco: "5,00", descricao: "", imagem: ".jpg"},
 {id: 9, nome: "Picole sabor morango", preco: "1,00", descricao: "", imagem: ".jpg"},
 {id: 10, nome: "Pr. Piccolo", preco: "00,01", descricao: "", imagem: ".jpg"},
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