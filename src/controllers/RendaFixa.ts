import { Router } from 'express'

const router = Router();
const path = "/renda-fixa"

router.get(path, (req, res) => {

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