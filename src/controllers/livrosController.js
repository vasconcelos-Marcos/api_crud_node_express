import livros from '../models/Livro.js';

class livroController{
    static listarLivros = async (req, res) => {
        try{
            const livrosResultado = await livros.find()
                .populate('autor')
            res.status(200).json(livrosResultado)
        }catch(err){
            res.status(500).json(err)
        }
    }
    static listarLivroPorId = async (req, res) => {
        try{
            const index = req.params.id
            const resultadoBuscaID = await livros.findById(index)
                .populate('autor')
            res.status(200).send(resultadoBuscaID.toJSON())
        }catch(err){
            res.status(400).send({message: `${err.message} - falha ao encontrar livro.`})
        }
    }
    static cadastrarLivro = async (req, res) => {
        try{
            const livro = new livros(req.body)
            await livro.save()
            res.status(201).send(livro.toJSON())
        }catch(err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
        }
    }
    static atualizaLivro = async (req, res) => {
        try{
            const index = req.params.id
            await livros.findByIdAndUpdate(index, {$set: req.body})
            res.status(200).send({message: 'Livro atualizado com sucesso.'})
        }catch(err){
            res.status(500).send({message: `${err.message} - falha ao atualizar livro.`})
        }
    }
    static removeLivro = async (req, res) => {
        try{
            const {id} = req.params
            await livros.findByIdAndDelete(id)
            res.status(200).send({message: `Livro removido da base de dados.`})
        }catch(err){
            res.status(500).send({message: `${err.message} - falha ao deletar livro.`})
        }
    }
    static listarLivrosPorEditora = async (req, res) => {
        try{
            const editora = req.query.editora
            const resultadoBuscaEditora = await livros.find({editora: editora})
                .populate('autor')
            res.status(200).send(resultadoBuscaEditora)
        }catch(err){
            res.status(400).send({message: `${err.message} - falha ao encontrar livros.`})
        }
    }
}

export default livroController

