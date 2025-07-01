import TesouroDiretoVentureTypes from "@enums/TesouroDiretoVentureTypes";
import Venture from "@interfaces/Venture";

interface ITesouroDiretoConstructor extends Venture {
    type: TesouroDiretoVentureTypes
}

export default class TesouroDireto extends Venture {
    type: TesouroDiretoVentureTypes;

    constructor(data: ITesouroDiretoConstructor) {
        super();
        this.type = data.type;
    }
}