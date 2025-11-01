import {Router} from "express"
import cancionesController from "../controllers/canciones.controller.js"

const cancionesRoutes = Router();

cancionesRoutes.get('/', cancionesController.getCanciones )
cancionesRoutes.post('/', cancionesController.crearCancion)
cancionesRoutes.get('/:id', cancionesController.getCancion)
cancionesRoutes.delete('/:id', cancionesController.eliminarCancion)
cancionesRoutes.put('/:id', cancionesController.actualizarCancion)

export default cancionesRoutes;