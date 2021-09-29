import { Router } from "express";
import * as ValidatorController from '../controllers/ValidatorController'

const router = Router();

router.get('/ping', ValidatorController.ping)
router.get('/random', ValidatorController.random)
router.get('/nome/:nome', ValidatorController.name)

export default router;