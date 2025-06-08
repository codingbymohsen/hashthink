export type Transaction = {
	id: number;
	to: string;
	amount: number;
	status: 'Approved' | 'Pending';
};
