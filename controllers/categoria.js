const {response}= require('express')

//Importancia de los modelos
const Categoria = require('../models/categoria')

//Metodo GET de la API
const categoriaGet = async (req, res = response) =>{
    //const {nombre} = req.query //Desestructuracion

    //Consultar todos los Vehiculos
    const categoria = await Categoria.find()

    res.json({ //RESPUESTA EN JSOn
        categoria
    })
   
}
//Método POST de la api
const categoriaPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    //console.log(body);
    try {
        const categoria = new Categoria(body) //Instanciando el objeto
        await categoria.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}


//Método Put de la api
const categoriaPut = async(req, res = response) => {

    const {id, nombre, descripcion, estado} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Categoria.findOneAndUpdate({id:id}, 
            {id:id, nombre:nombre, descripcion:descripcion, estado:estado})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}
//Método DELETE de la api
const categoriaDelete = async(req, res) => {

    const {_id} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const categoria = await Categoria.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}


module.exports= {
    categoriaGet, 
    categoriaPost,
    categoriaPut,
    categoriaDelete
}