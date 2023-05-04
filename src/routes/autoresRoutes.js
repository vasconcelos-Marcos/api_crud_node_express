import express from 'express'
import autorController from '../controllers/autoresController.js'

const routerAutores = express.Router()

routerAutores
    .get('/autores', autorController.listarAutores)
    .get('/autores/:id', autorController.listarAutorPorId)
    .post('/autores', autorController.cadastrarAutor)
    .put('/autores/:id', autorController.atualizaAutor)
    .delete('/autores/:id', autorController.removeAutor)

export default routerAutores