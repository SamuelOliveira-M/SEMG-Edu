import express,{Request,Response,NextFunction} from 'express'
import morgan from 'morgan'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
import dotenv from "dotenv";
import admin from "firebase-admin";
import path from 'path';
import * as fs from 'fs';
import cors from 'cors';


import studentRoutes from './routes/studentRoutes';
import schoolRoutes from './routes/schoolRoutes';
import teacherRoutes from './routes/teacherRoutes';

dotenv.config();

const configPath = process.env.FIREBASE_CONFIG_PATH;

if (!configPath) {
  console.error('Variável de ambiente FIREBASE_CONFIG_PATH não definida.');
  process.exit(1);
}

// Crie o caminho absoluto para o arquivo de configuração JSON
const absoluteConfigPath = path.resolve(__dirname, configPath);
// Carrega o arquivo de configuração JSON usando fs.readFileSync
const configData = fs.readFileSync(absoluteConfigPath, 'utf8');

const serviceAccount = JSON.parse(configData) as admin.ServiceAccount;

const BUCKET = process.env.FIREBASE_STORAGE_BUCKET;

// Initialize Firebase
admin.initializeApp({
  credential:admin.credential.cert(serviceAccount),
  storageBucket: BUCKET
});


const app = express()
const port = process.env.PORT || 3333

app.use(cors());

app.options('*', cors());


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))

app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

app.use(studentRoutes)
app.use(schoolRoutes)
app.use(teacherRoutes)

app.get('/',(req,res)=>{
  res.status(200).send('<h1>Está Online</h1>')
})

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
