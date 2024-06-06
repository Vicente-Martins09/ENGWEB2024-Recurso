const mongoose = require('mongoose')
var Livros = require("../models/livros")

module.exports.list = ()=>{
    return Livros.find().exec();
}

module.exports.findByCharater = character =>{
    return Livros.find({ characters: {$in :character} }).exec();
}

module.exports.findByGenre = genre =>{
    return Livros.find({ genres: {$in : genre} }).exec();
}

module.exports.findById = id =>{
    return Livros.findOne({_id: id}).exec();
}

module.exports.findByAuthor = author =>{
    return Livros.find({author: author}).exec();
}

module.exports.listCharacters = () =>{
    return Livros.distinct('characters').then(entidades => entidades.sort());
}

module.exports.listGenres = ()=>{
    return Livros.distinct('genres').then(tipos => tipos.sort());
}

module.exports.insert = livro =>{
    if((Livros.find({ _id: livro._id }).exec()).lenght !=1){
        var newLivro = new Livros(livro)
        return newLivro.save()

    }
}

module.exports.update = (id, livro) => {
    return Livros.findByIdAndUpdate(id, livro, { new: true }).exec();
}

module.exports.delete = id => {
    return Livros.findByIdAndDelete(id).exec();
}