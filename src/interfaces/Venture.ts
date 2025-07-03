/**
 * @description
 * @constructor
 */

import VentureTypesEnum from '@enums/VentureTypes';
import { ETributeType } from '@enums/tributeTypes';

export default abstract class Venture {
  name: string = '';
  value: number = 0;
  boughtAt: Date = new Date();
  profitability: number = 0;
  tributeType: ETributeType = ETributeType.ISENTO;
  archived: boolean = false;
  type?: VentureTypesEnum;

  archive(callback: () => unknown): void {
    this.archived = true;
    callback();
  }
}
