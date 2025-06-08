import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { skip } from 'node:test';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transactions.schema';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Controller('transactions')
export class TransactionsController {
	constructor(private transactionService: TransactionsService) {}
	@Post()
	async createTransaction(@Body() transaction: CreateTransactionDto) {
		return this.transactionService.createTransaction(transaction);
	}

	@Get('/:currency')
	findAll(
		@Query() pagination: { skip: number; limit: number },
		@Param('currency') currency: string
	): Promise<Transaction[]> {
		return this.transactionService.findAll({
			skip: pagination.skip,
			limit: pagination.limit,
			currency,
		});
	}

	@Patch(':id')
	update(@Param('id') _id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
		return this.transactionService.update(_id, updateTransactionDto);
	}
}
