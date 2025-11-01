import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'
import cancionesRoutes from './routes/canciones.route.js'

dotenv.config()


const app = express()
const PORT = process.env.PORT || 8080;



// middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))


toConnectToBd()


app.use('/api/canciones', cancionesRoutes );

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})