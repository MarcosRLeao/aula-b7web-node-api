import {Request, Response} from 'express';
import { Phrases } from '../models/Phrases';
import { Sequelize } from 'sequelize';


// cria uma frase
export const create = async (req: Request, res: Response) => {
    let { author, txt } = req.body;
    let newTxt = await Phrases.create({author, txt})
    res.status(201);
    res.json({id: newTxt.id, author, txt})
}

// lista todas a frases
export const readAll = async (req: Request, res: Response) => {
    let list = await Phrases.findAll()
    res.json({list})
}

// lista uma frase selecionada
export const readOne = async (req: Request, res: Response) => {
    let { id } = req.params;
    let phrase = await Phrases.findByPk(id);
    
    if(phrase){
        res.json({phrase})
    }else{
        res.json({error: "Frase não encontrada!"})
    } 
}

// altera uma frase selecionada
export const update = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, txt } = req.body;

    let phrase = await Phrases.findByPk(id);
    
    if(phrase){
        phrase.author = author;
        phrase.txt = txt;
        await phrase.save()
        res.json({phrase})
    }else{
        res.json({error: "Frase não encontrada!"})
    } 
}

// deleta uma frase selecionada
export const del = async (req: Request, res: Response) => {
    let { id } = req.params;
    await Phrases.destroy({where: {id}})
    res.json({})
}

// mostra uma frase aleatoriamente
export const readRandom = async (req: Request, res: Response) => {
    let phrase = await Phrases.findOne({
        order: [
            Sequelize.fn('RANDOM')
        ]
    })

    if(phrase){
        res.json({phrase})
    }else{
        res.json({error: "Não há frase cadastrada!"})
    }
    
}


