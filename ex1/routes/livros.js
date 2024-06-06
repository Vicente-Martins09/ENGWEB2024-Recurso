var express = require('express');
var router = express.Router();

var Livro = require("../controllers/livros")

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(req.query.charater){
    Livro.findByCharater(req.query.charater)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
    return
  }

  if(req.query.genre){
    Livro.findByGenre(req.query.genre)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
    return 
  }

  if(req.query.author){
    Livro.findByAuthor(req.query.author)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
    return 
  }

  Livro.list()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.get('/characters', function(req, res, next) {
  Livro.listCharacters()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/genres', function(req, res, next) {
  Livro.listGenres()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.get('/:id', function(req, res, next) {
  Livro.findById(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});

router.post('/', function(req, res, next) {
  Livro.insert(req.body)
    .then(data=> res.jsonp(data))
    .catch(erro=> res.jsonp(erro))
});

router.delete('/:id', function(req, res, next) {
  Livro.delete(req.params.id)
    .then(data => res.jsonp(data))
    .catch(erro=> res.jsonp(erro))
});


router.put('/:id', function(req, res, next) {
  Livro.update(req.params.id, req.body)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
});



module.exports = router;
