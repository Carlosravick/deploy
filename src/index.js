const express = require('express')
const app = express()
const cors = require('cors')
const rotas = require('./rotas')

app.use(cors())

app.use(express.json())

app.use(rotas)


app.listen(3000, () => {
     console.log('o server esta on na porta 3000')
})