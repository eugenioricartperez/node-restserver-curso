
require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.json('Hello World')
})
 
app.post('/usuario', function (req, res) {
  let body = req.body;
  if(body.nombre === undefined) {
    res.status(400).json({
      ok:false,
      message:'el nombre es necesario'
    });
  } else {
  res.json({
    persona: body
  })}
})


app.put('/usuario/:id', function (req, res) {
  let iduser = req.params.id;
  res.json({ iduser });
})

app.listen(process.env.PORT,() => {
    console.log("Escuchando por el puerto 3000");
})