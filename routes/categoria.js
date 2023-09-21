const {Router} = require('express')
//Desestructuracion. EXtrar un atributo de un objeto

const route = Router()

//importar metodos del controlador
const {categoriaGet, categoriaPost, categoriaPut, categoriaDelete} = require('../controllers/categoria')

route.get('/',categoriaGet) //Listar datos

route.post('/',categoriaPost)

route.put('/',categoriaPut)

route.delete('/',categoriaDelete)


module.exports = route

//APP - SERVER - ROUTE - CONTROLLADOR - MODELO