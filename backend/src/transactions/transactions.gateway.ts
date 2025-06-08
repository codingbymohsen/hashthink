// chat.gateway.ts
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Transaction } from './transactions.schema';

@WebSocketGateway({
	cors: {
		origin: '*', // adjust this in production
	},
})
export class TransactionsGateway {
	@WebSocketServer()
	server: Server;

	sendServerMessageToClients(data: { transactions: Transaction[]; currency: string }) {
		this.server.emit('transactions', data);
	}
}
