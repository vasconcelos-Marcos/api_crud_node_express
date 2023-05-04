import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on('error', console.log.bind("Erro de Conexão."))
db.once('open', ()=>{
  console.log("Conexão com o banco de dados bem sucedida.")
})

const app = express()
app.use(express.json())
routes(app)

export default app