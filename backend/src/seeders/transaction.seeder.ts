import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { TransactionsService } from '../transactions/transactions.service';
import { Transaction } from '../transactions/transactions.schema';
import { CreateTransactionDto, CurrencyEnum } from '../transactions/dto/create-transaction.dto';

async function bootstrap() {
	const app = await NestFactory.createApplicationContext(AppModule);
	const transactionService = app.get(TransactionsService);

	const seedData: CreateTransactionDto[] = [
		{
			referenceNumber: 'TXN001',
			to: 'John Doe',
			date: new Date().toISOString(),
			paidWith: 'Credit Card',
			payment: {
				amount: 100,
				country: 'US',
			},
			status: 'Approved',
			currency: CurrencyEnum.USD,
		},
		{
			referenceNumber: 'TXN002',
			to: 'Jane Smith',
			date: new Date().toISOString(),
			paidWith: 'PayPal',
			payment: {
				amount: 150,
				country: 'US',
			},
			status: 'Pending',
			currency: CurrencyEnum.USD,
		},
		{
			referenceNumber: 'TXN001',
			to: 'John Doe',
			date: new Date().toISOString(),
			paidWith: 'Credit Card',
			payment: {
				amount: 100,
				country: 'US',
			},
			status: 'Approved',
			currency: CurrencyEnum.IRR,
		},
		{
			referenceNumber: 'TXN001',
			to: 'John Doe',
			date: new Date().toISOString(),
			paidWith: 'Credit Card',
			payment: {
				amount: 100,
				country: 'US',
			},
			status: 'Approved',
			currency: CurrencyEnum.INR,
		},
		{
			referenceNumber: 'TXN001',
			to: 'John Doe',
			date: new Date().toISOString(),
			paidWith: 'Credit Card',
			payment: {
				amount: 100,
				country: 'US',
			},
			status: 'Approved',
			currency: CurrencyEnum.INR,
		},
	];

	for (const data of seedData) {
		await transactionService.createTransaction(data);
	}

	await app.close();
}

bootstrap();
