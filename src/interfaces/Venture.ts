/**
 * @description
 * @constructor
 */

import { ETributeType } from "@enums/tributeTypes";

export abstract class Venture {
    name: string = "";
    type: unknown;
    value: number = 0;
    boughtAt: Date = new Date();
    profitability: number = 0;
    tributeType = ETributeType.ISENTO;
    archived: boolean = false;
    get() {}
    create() {}
    update() {}
    archive() {
        this.archived = !this.archived;
    }
}