import { IPayment } from '../transactions.schema';

export class CreateTransactionDto {
	referenceNumber: string;
	to: string;
	date: string;
	paidWith: string;
	payment: IPayment;
	status: string;
	currency: string;
}
