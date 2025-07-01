import DtoObject from "./dto.type";

const AcoesDto: DtoObject<{}> = {
    name: "string",
    value: "number",
    boughtAt: "object",
    profitability: "number",
    tributeType: "string"
} as const

export default AcoesDto;