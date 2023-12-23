import express,{Request,Response,NextFunction} from 'express'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
import dotenv from "dotenv";

import escolaRoutes from './routes/EscolaRoutes';


dotenv.config();

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))


app.use(escolaRoutes)

app.use((error:Error,request:Request,response:Response,next:NextFunction)=>{
  response.json({
    status:"error",
    message:error.message
  });
  next()
})

app.listen(port,()=>{
  console.log(`Aplicação online na porta ${port}`)
})
