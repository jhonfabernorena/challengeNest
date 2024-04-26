import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TransferDto {  
    @IsNotEmpty()
    @IsString()
    id: number; 

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsNumber()
    numberAccount: number;

    @IsNotEmpty()
    @IsNumber()
    balance: number;
}