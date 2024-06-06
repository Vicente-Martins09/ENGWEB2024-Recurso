var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get("http://localhost:17000/books/")
    .then(resp=>{
      var livros = resp.data
      res.status(200).render("index",{"lLivros": livros})
      
  })
  .catch(erro=>{
      res.status(501).render("erro",{"erro": erro})
  })
});

router.get('/:id', function(req, res, next) {
  axios.get("http://localhost:17000/books/"+ req.params.id)
    .then(resp=>{
        var livro = resp.data
      res.status(200).render("livro",{"livro": livro})
      
  })
  .catch(erro=>{
      res.status(502).render("erro",{"erro": erro})
  })
});

router.get('/authors/:idAutor', function(req, res, next) {
  axios.get("http://localhost:17000/books?author="+ req.params.idAutor)
    .then(resp=>{
      var Livros = resp.data
      var somatorio= Livros.length;
      res.status(200).render("autor",{ "autor": req.params.idAutoridAutor , "livros": Livros, somatorio: somatorio});
      
  })
  .catch(erro=>{
      res.status(503).render("erro",{"erro": erro})
  })
});




module.exports = router;
