import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TransferDto {  
    @IsNotEmpty()
    @IsString()
    id: number; 

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    numberAccount: number;

    @IsNotEmpty()
    @IsNumber()
    balance: number;
}