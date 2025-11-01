import Canciones from "../models/canciones.model.js";

const cancionesController = {
    getCanciones : async  (req, res)=> {
        try{
            const canciones = await Canciones.find();
            return res.status(201).json(canciones)
        }catch(e){
            return res.status(400).json(e)
        }

    },
    crearCancion : async (req, res)=> {
        const {titulo, artista, anioLanzamiento, genero } = req.body;
        const nuevoArray = {titulo, artista, anioLanzamiento, genero} 
        try{
            const nuevaCancion = await Canciones.create(nuevoArray)
            res.status(201).json(nuevaCancion)
        }catch(e){

            const messages = {};
            if(e.name === "ValidationError"){
                Object.keys(e.errors).forEach(key => {
                    messages[key] = e.errors[key].message;
                })
                
            }

            return res.status(400).json({errors : {...messages}})
        }
    },
    getCancion: async (req, res)=> {
        const id = req.params.id;

        try{
            const cancion = await Canciones.findById(id)
            if(!cancion){
                return res.status(404).json({message: "La id indicada no existe"})
            }
            res.status(201).json(cancion)
        }catch(e){
            return res.status(400).json(e)
        }
    },
    eliminarCancion: async (req,res)=> {
        const id = req.params.id;
        try{
            const cancionEliminada = await Canciones.findByIdAndDelete(id)
            if(!cancionEliminada){
                return res.status(404).json({message: "La id indicada no existe"})
            }
            res.status(201).json({message: "La cancion fue eliminada exitosamente"})
        }catch(e){
            return res.status(400).json(e)
        }
    },
    actualizarCancion: async (req, res)=> {
        const id = req.params.id;
        const {titulo, artista, anioLanzamiento, genero} = req.body;
        const dataAActualizar = {};
        if(titulo){
            dataAActualizar.titulo = titulo
        }
        if(artista){
            dataAActualizar.artista = artista
        }
        if(anioLanzamiento){
            dataAActualizar.anioLanzamiento = anioLanzamiento
        }
        if(genero){
            dataAActualizar.genero = genero
        }
        try{
            const cancionActualizada = await Canciones.findByIdAndUpdate(id, dataAActualizar, {new: true, runValidators: true})
            if(!cancionActualizada){
                return res.status(404).json({message: "La id indicada no existe"})
            }
            res.status(201).json(cancionActualizada)
        }catch(e){
            return res.status(400).json(e)
        }
    }
}


export default cancionesController;