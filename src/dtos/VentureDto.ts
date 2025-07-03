import Venture from '@interfaces/Venture';
import SchemaOf from './dto.type';

export type VentureDto = {
  name: string;
  value: number;
  boughtAt: Date;
  profitability: number;
  tributeType: string;
};

export const VentureSchema: SchemaOf<Omit<Venture, 'archive'>> = {
  name: 'string',
  value: 'number',
  boughtAt: 'object',
  profitability: 'number',
  tributeType: 'string',
  archived: 'boolean',
  type: 'string',
} as const;
