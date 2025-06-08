import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
export type TransactionType = {
  _id: string;
  referenceNumber: string;
  to: string;
  date: string;
  paidWith: string;
  payment: { amount: number; country: string };
  status: "Approved" | "Pending";
  currency: string;
};
type TransactionsState = {
  data: TransactionType[];
  default: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: TransactionsState = {
  data: [],
  default: "USD",
  loading: false,
  error: null,
};

export const fetchTransactions = createAsyncThunk(
  "transactions/fetch",

  async (currency: string, { getState }) => {
    const state = getState() as { transactions: TransactionsState };
    const selectedCurrency = currency || state.transactions.default || "usd";

    const res = await fetch(
      "http://localhost:3001/transactions/" + selectedCurrency,
    );
    if (!res.ok) throw new Error("Failed to fetch");
    return (await res.json()) as TransactionType[];
  },
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setDefaultCurrency(state, action: PayloadAction<{ currency: string }>) {
      state.default = action.payload.currency;
    },
    updateTransactionsList(
      state,
      action: PayloadAction<{
        transactions: TransactionType[];
        currency: string;
      }>,
    ) {
      state.data = action.payload.transactions;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error";
      });
  },
});
export const { setDefaultCurrency, updateTransactionsList } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
