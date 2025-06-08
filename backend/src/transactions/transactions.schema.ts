import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class IPayment {
	amount: number;
	country: string;
}

@Schema({ timestamps: true })
export class Transaction extends Document {
	@Prop({ type: String, required: true })
	referenceNumber: string;
	@Prop({ type: String, required: true })
	to: string;
	@Prop({ type: Date, required: true })
	date: string;
	@Prop({ type: String, required: true })
	paidWith: string;
	@Prop({ type: Object })
	payment: IPayment;
	@Prop({ type: String })
	status: string;
	@Prop({ type: String, required: true })
	currency: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
