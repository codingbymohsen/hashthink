import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { TransactionsService } from '../transactions/transactions.service';
import { Transaction } from '../transactions/transactions.schema';
import { CreateTransactionDto } from '../transactions/dto/create-transaction.dto';

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
			currency: 'usd',
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
			currency: 'usd',
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
			currency: 'irr',
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
			currency: 'inr',
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
			currency: 'inr',
		},
	];

	for (const data of seedData) {
		await transactionService.createTransaction(data);
	}

	await app.close();
}

bootstrap();
