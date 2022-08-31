import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import path from "path";

import taskRoutes from './routes' //EN ts y js con node, no hace falta definir que hay un index

const app = express()

app.use(cors());
app.use(morgan('dev')); //nos refleja en consola todo lo que pidamos en el lado del servidor
app.use(express.json());

app.use('/api', taskRoutes)


// read static files
app.use(express.static(path.join(__dirname, "..", "..", "dist")));

export default app;


