
const  knex = require('../conexão')

const visualizar = async ( req , res ) => {
    
    try {
        const resultado = await knex('carros').select('*');
        return res.json(resultado)
    } catch (error) {
        console.log(error)
        return res.status(500).json('error')
    }
     
}
module.exports= { 

    visualizar,

}