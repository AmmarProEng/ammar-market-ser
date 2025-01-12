import { MaxLength, MinLength } from "class-validator";

export class CreateProductsDto {
    
    id: number;

    @MinLength(2)
    @MaxLength(6)
    productName: string;
}
