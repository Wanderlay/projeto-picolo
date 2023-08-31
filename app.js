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

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Olá, Mundo!', lista: ["peixe", "brocolis", "mortadela", 1, 3, "pao"]});
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});