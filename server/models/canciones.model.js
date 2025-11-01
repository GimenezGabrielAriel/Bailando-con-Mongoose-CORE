import { mongoose } from "mongoose";

const cancionesSchema = mongoose.Schema(
    {
        titulo : {
            type : String,
            required : [true, "Debes indicar un título"],
            minlength : [6, "El título no es lo suficientemente largo, debe tener al menos 6 caracteres"],
            maxlength : [255, "El título es demasiado largo, supera el límite de caracteres"],
        },
        artista : {
            type: String,
            required : [true, "Debes indicar un artista"],
            minlength : [10, "El nombre del artista debe tener al menos 10 caracteres"],
            maxlength : [255, "El nombre es demasiado largo, supera el límite de caracteres"]
        },
        anioLanzamiento :  {
            type: Number,
            required: [true, "Debes indicar un año de lanzamiento"],
            min: [1000, "El año de lanzamiento debe tener 4 dígitos"],
            max: [9999, "El año de lanzamiento debe tener 4 dígitos"]
        },
        genero : {
            type: String,
            required : [true, "Debes indicar un género"]
        }

    },
    {timestamps : true}
)


const Canciones = mongoose.model('canciones',cancionesSchema)

export default Canciones;