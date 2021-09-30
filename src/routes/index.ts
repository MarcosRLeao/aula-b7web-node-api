import { Router } from "express";
import * as ApiController from '../controllers/ApiController'

const router = Router();

router.post('/frase', ApiController.create)
router.get('/frases', ApiController.readAll)
router.get('/frase/aleatoria', ApiController.readRandom)

router.get('/frase/:id', ApiController.readOne)
router.put('/frase/:id', ApiController.update)
router.delete('/frase/:id', ApiController.del)

export default router;