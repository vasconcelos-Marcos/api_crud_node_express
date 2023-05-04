import mongoose from "mongoose"

mongoose.connect('link de conexão')

let db = mongoose.connection

export default db