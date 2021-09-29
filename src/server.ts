import express, {Request, Response}from "express";
import path from "path";
import dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';

dotenv.config();

const server = express();

server.use(cors({
    origin: '*',
    methods: ['GET']
}))

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}))


server.use(routes)


server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({erro: 'Endpoint não encontrado.'})
})

server.listen(process.env.PORT, () => {
    console.log(`servidor rodando em http://localhost:${process.env.PORT}`)
})
