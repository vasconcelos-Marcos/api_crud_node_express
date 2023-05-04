import express from 'express'
import routerLivros from './livrosRoutes.js'
import routerAutores from './autoresRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res)=>{
        res.status(200).send({titulo: 'Curso de node.'})
    })

    app.use(
        express.json(),
        routerLivros,
        routerAutores
    )
}

export default routes