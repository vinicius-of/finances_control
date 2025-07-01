import DtoObject from "./dto.type";

const RendaFixaDto: DtoObject<{}> = {
    name: "string",
    value: "number",
    boughtAt: "object",
    profitability: "number",
    tributeType: "string"
} as const

export default RendaFixaDto;