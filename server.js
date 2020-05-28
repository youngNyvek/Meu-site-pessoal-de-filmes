const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

const filmes = require("./data")

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get('/', function(req, res){
    return res.render('index')
})

server.get('/filmes', function(req, res){

    return res.render('filmes', {items: filmes})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });
server.listen(5000, function(){
    console.log('server is running')
})
