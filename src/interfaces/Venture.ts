import VentureTypesEnum from '@enums/VentureTypes';
import { ETributeType } from '@enums/tributeTypes';

export default interface Venture {
  name: string;
  value: number;
  boughtAt: Date;
  profitability: number;
  tributeType: ETributeType;
  archived: boolean;
  type?: VentureTypesEnum;
  archive: () => Promise<void>;
}
