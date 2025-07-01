import { Request, RequestHandler, Response, Router } from 'express'
import { body, params } from '../middlewares/Validations';
import dtos from '@dtos/index';

const router = Router();
const path = "/tesouro-direto"

router.get('/', (req, res) => {
    res.send('GET')
})

router.get<{id: string}>('/:id', (req, res) => {
    const { id } = req.params;
    
})

router.post('/', body(dtos.TesouroDiretoSchema), (req, res) => {
    res.json()
})

router.put('/', (req, res) => {
    res.send('PUT')
})

router.put('/archive', (req, res) => {
    res.status(202).send("archived")
})

router.post('/import', (req, res) => {
    
})

export default { router, path };