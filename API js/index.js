const express = require('express')
const app = express()
const port = 3001

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'luiza1',
  password : '1234',
  database : 'pet_shop',
  port: 3306
});

app.get('/', (req, res) => {
    
 
    connection.query('', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
     
    
})

app.post('/', (req, res) => {
    connection.connect();
 
    connection.query('', function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
     
    connection.end();
})

app.get('/usuario', (req, res) => {
})

app.post('/usuario', (req, res) => {

  const nome = req.body.nome;
  const email = req.body.email;
  const cpf = req.body.cpf;
  const telefone = req.body.telefone;
  const endereco = req.body.endereco;
  const senha = req.body.senha;
  
  const query = `
  INSERT INTO usuario
  (nome, email, cpf, telefone, endereco, senha) 
  VALUES 
  ( "${nome}", "${email}" , "${cpf}" , "${telefone}" , "${endereco}" , "${senha}");
  `;


  connection.query( query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
    
})

app.get('/agenda/:idusuario', (req, res) => {

  const idusuario = req.params.idusuario
  
  connection.query(`SELECT agenda.*,animais.nome FROM agenda, animais WHERE agenda.id_usuario = ${idusuario} and animais.id_animais = agenda.id_animais;`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
})

app.post('/agenda', (req, res) => {

  const id_usuario= req.body.id_usuario
  const id_animais= req.body.id_animais
  const servico= req.body.servico 
  const data= req.body.data
  const Horario= req.body.Horario 
  const id_profissional= req.body.id_profissional
  
  const query = `
  INSERT INTO agenda
  (id_usuario, id_animais, servico, data, Horario, id_profissional) 
  VALUES 
  ( "${id_usuario}", "${id_animais}", "${servico}" , "${data}" , "${Horario}" , "${id_profissional}");
  `;


  connection.query( query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
    
})

app.get('/login', (req, res) => {
})

app.post('/login', (req, res) => {

    const email = req.body.email;
    const senha = req.body.senha;
    
    const query = `
    SELECT * FROM usuario WHERE
    email = "${email}" AND senha = "${senha}" ;
    `;
  
  
    connection.query( query, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
      
})

app.get('/animais/:idusuario', (req, res) => {

    const idusuario = req.params.idusuario
    
 
  connection.query(`SELECT * FROM animais WHERE id_usuario = ${idusuario};`, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
   
  
})

app.get('/CadastrarPet', (req, res) => {
})

app.post('/CadastrarPet', (req, res) => {

    const nome = req.body.nome;
    const especie  = req.body.especie;
    const raca = req.body.raca;
    const porte = req.body.porte;
    const id_usuario = req.body.id_usuario;
    
    const query = `
    INSERT INTO animais 
    (id_usuario, nome, especie, raca, porte) 
    VALUES 
    ("${id_usuario}" , "${nome}" , "${especie}" , "${raca}" , "${porte}" );
    `;
  
  
    connection.query( query, function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    });
      
})

app.get('/buscarProfissional/:profissional', (req, res) => {

  const profissional = req.params.profissional

  const query = `SELECT * FROM agenda WHERE id_profissional = "${profissional}" ;`;
  
  connection.query( query , function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });

})

app.listen(port, () => {
  console.log(`a API está rodando em localhost:${port}`)
})