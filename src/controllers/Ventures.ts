import { Router } from 'express';
import { body, params } from '../middlewares/Validations';
import dtos from '@dtos/index';
import VentureModel from '../schemas/VentureSchema';
import Venture from '@interfaces/Venture';

const router = Router();
const path = '/ventures';

router.get('/', params(dtos.VentureInput), async (req, res) => {
  const ventures = await VentureModel.find({}).limit(10).exec();
  res.json(ventures);
});

router.get<{ id: string }>('/:id', async (req, res) => {
  const { id } = req.params;
  res.json(
    await VentureModel.find({
      _id: id,
    }).exec(),
  );
});

router.post('/', body(dtos.VentureInput), async (req, res) => {
  const data = req.body as Venture;
  const newVentureDoc = await new VentureModel(data);
  await newVentureDoc.save();
  res.status(201).json(newVentureDoc.toObject());
});

router.put('/', async (req, res) => {
  const data = req.body;
  const existingDoc = await VentureModel.findById(data?._id).exec();

  if (existingDoc) {
  }
});

router.put('/archive', (req, res) => {
  res.status(202).send('archived');
});

router.post('/import', (req, res) => {});

export default { router, path };
