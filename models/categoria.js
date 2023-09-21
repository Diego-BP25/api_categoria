const {Schema, model} = require('mongoose')

const CategoriaSchema = Schema({
    id: {
        type: String,
        required:[true, "El id es obligatorio"]
    },

    nombre: {
        type: String,
        required:[true, "El nombre es obligatoria"]
    },

    descripcion: {
        type: String,
        required:[true, "La descripcion es obligatoria"]
    },

    estado: {
        type: String,
        required:[true, "El estado es obligatoria"]
    },

    
})

//Exportar la función UsuarioSchema
module.exports = model('Categoria',CategoriaSchema)

