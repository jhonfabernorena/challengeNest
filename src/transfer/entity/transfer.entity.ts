import { Prop, Schema } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Transfer{

    @Prop({required: true, unique: true})
    id: number; 

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    lastname: string;

    @Prop({required: true, unique: true})
    numberAccount: number;

    @Prop({required: true})
    balance: number;
}

