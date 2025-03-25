import { Request, Response, Router } from 'express'
import { params } from '../middlewares/Validations';
import dtos from '@dtos/index';

const router = Router();
const path = "/tesouro-direto"

router.get(path, params(dtos.DTOTesouroDireto), (req: Request, res: Response) => {
    res.send('OK')
})

router.get<{id: string}>(`${path}/{id}`, (req, res) => {
    const { id } = req.params;
})

router.post(path,(req, res) => {

})

router.put(path, (req, res) => {

})

router.put(`${path}/archive`, (req, res) => {

})

export default {router, path};