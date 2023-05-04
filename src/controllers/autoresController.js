import autores from '../models/Autor.js';

class autorController{
    static listarAutores = async (req, res) => {
        try{
            const autoresResultado = await autores.find()
            res.status(200).json(autoresResultado)
        }catch(err){
            res.status(500).json(err)
        }
    }
    static listarAutorPorId = async (req, res) => {
        try{
            const index = req.params.id
            const resultadoBuscaID = await autores.findById(index)
            res.status(200).send(resultadoBuscaID.toJSON())
        }catch(err){
            res.status(400).send({message: `${err.message} - falha ao encontrar autor.`})
        }
    }
    static cadastrarAutor = async (req, res) => {
        try{
            const autor = new autores(req.body)
            await autor.save()
            res.status(201).send(autor.toJSON())
        }catch(err){
            res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
        }
    }
    static atualizaAutor = async (req, res) => {
        try{
            const index = req.params.id
            await autores.findByIdAndUpdate(index, {$set: req.body})
            res.status(200).send({message: 'Autor atualizado com sucesso.'})
        }catch(err){
            res.status(500).send({message: `${err.message} - falha ao atualizar autor.`})
        }
    }
    static removeAutor = async (req, res) => {
        try{
            const {id} = req.params
            await autores.findByIdAndDelete(id)
            res.status(200).send({message: `Autor removido da base de dados.`})
        }catch(err){
            res.status(500).send({message: `${err.message} - fala ao deletar autor.`})
        }
    }
}

export default autorController