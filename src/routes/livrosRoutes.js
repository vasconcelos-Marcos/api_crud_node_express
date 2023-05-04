import express from 'express'
import livroController from '../controllers/livrosController.js'

const routerLivros = express.Router()

routerLivros
    .get('/livros', livroController.listarLivros)
    .get('/livros/busca', livroController.listarLivrosPorEditora)
    .get('/livros/:id', livroController.listarLivroPorId)
    .post('/livros', livroController.cadastrarLivro)
    .put('/livros/:id', livroController.atualizaLivro)
    .delete('/livros/:id', livroController.removeLivro)

export default routerLivros