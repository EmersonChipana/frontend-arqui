import { QueryDto } from "./query.dto";

export interface ResponseDto {
    success: boolean;
    query: QueryDto;
    date: string;
    result: number;
}
