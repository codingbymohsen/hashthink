import { IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { IPayment } from '../transactions.schema';
import { Type } from 'class-transformer';

export enum CurrencyEnum {
	USD = 'usd',
	IRR = 'irr',
	INR = 'inr',
}
export class CreateTransactionDto {
	@IsNotEmpty()
	referenceNumber: string;
	@IsNotEmpty()
	to: string;
	@IsNotEmpty()
	date: string;
	@IsNotEmpty()
	paidWith: string;

	@Type(() => IPayment)
	@ValidateNested()
	payment: IPayment;
	@IsNotEmpty()
	status: string;
	@IsNotEmpty()
	@IsEnum(CurrencyEnum)
	currency: CurrencyEnum;
}
