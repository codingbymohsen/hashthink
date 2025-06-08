import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './transactions.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsGateway } from './transactions.gateway';

@Injectable()
export class TransactionsService {
	constructor(
		@InjectModel(Transaction.name) private readonly transactionModel: Model<Transaction>,
		private readonly gateway: TransactionsGateway
	) {}
	async createTransaction(transaction: CreateTransactionDto) {
		await this.findTransactions(transaction.currency);
		return new this.transactionModel(transaction).save();
	}

	async findAll(query: { skip: number; limit: number; currency: string }): Promise<Transaction[]> {
		const { skip, limit, currency } = query;
		return this.transactionModel.find({ currency }).skip(skip).limit(limit);
	}
	async update(_id: string, updateTransactionDto: UpdateTransactionDto) {
		const transaction = await this.transactionModel.findById(_id);
		const result = await this.transactionModel.updateOne({ _id }, updateTransactionDto);
		await this.findTransactions(transaction.currency);
	}
	async findTransactions(currency: string) {
		const transactions = await this.transactionModel.find({ currency });
		console.log(transactions);
		this.gateway.sendServerMessageToClients({ transactions, currency });
	}
}
