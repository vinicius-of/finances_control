/**
 * @description
 * @constructor
 */

import { ETributeType } from "@enums/tributeTypes";

export default abstract class Venture {
    name: string = '';
    value: number = 0;
    boughtAt: Date = new Date();
    profitability: number = 0;
    tributeType: ETributeType = ETributeType.ISENTO;
    private archived: boolean = false;
    abstract type: unknown;
}