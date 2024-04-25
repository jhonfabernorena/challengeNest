import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class transferDto {  
    
    @IsNotEmpty()
    @IsString()
    readonly id: number; 

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    numberAccount: number;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    @IsString()
    destinyId: number

}