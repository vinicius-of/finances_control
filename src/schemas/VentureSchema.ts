import { ETributeType } from '@enums/tributeTypes';
import VentureTypesEnum from '@enums/VentureTypes';
import Venture from '@interfaces/Venture';
import mongoose, { Schema, SchemaTypes } from 'mongoose';

const ventureSchema = new Schema<Partial<Venture>>({
  name: SchemaTypes.String,
  value: SchemaTypes.Number,
  type: {
    enum: VentureTypesEnum,
    type: SchemaTypes.String,
  },
  boughtAt: SchemaTypes.Date,
  profitability: SchemaTypes.Number,
  tributeType: {
    type: SchemaTypes.String,
    enum: ETributeType,
  },
});

const VentureModel = mongoose.model('Ventures', ventureSchema);
export default VentureModel;
