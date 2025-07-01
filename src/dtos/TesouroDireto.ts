import TesouroDireto from "@interfaces/TesouroDireto";
import SchemaOf from "./dto.type";

export type TesouroDiretoDto = {
    name: string,
    value: number,
    boughtAt: Date,
    profitability: number,
    tributeType: string
};

export const TesouroDiretoSchema: SchemaOf<Omit<TesouroDireto, 'type'>> = {
    name: "string",
    value: "number",
    boughtAt: "object",
    profitability: "number",
    tributeType: "string"
} as const