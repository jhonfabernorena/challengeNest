import { Document } from 'mongoose';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({timestamps: true})
export class transfer {

    @Prop({required: true})
    readonly id: number; 

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    numberAccount: number;

    @Prop({required: true})
    amount: number;

    @Prop({required: true})
    destinyId: number

}

