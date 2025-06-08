import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsGateway } from './transactions/transactions.gateway';
import { Transaction, TransactionSchema } from './transactions/transactions.schema';
import { TransactionsController } from './transactions/transactions.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService): Promise<MongooseModuleOptions> =>
				({
					uri: configService.get<string>('MONGODB_URI'),
				} as MongooseModuleOptions),
			inject: [ConfigService],
		}),
		MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }]),
	],
	controllers: [TransactionsController],
	providers: [TransactionsService, TransactionsGateway],
})
export class AppModule {}
