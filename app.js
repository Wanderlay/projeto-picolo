const express = require('express');
const app = express();
const port = 3000;

//let lista= ["peixe", "brocolis", "mortadela", 1, 3, "pao"]
const aleatorio= function(){
  
}

app.set('view engine', 'ejs');
app.use(express.static('public'));

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