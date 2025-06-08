"use client"; // 👈 This must be the first line

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactions,
  setDefaultCurrency,
  TransactionType,
  updateTransactionsList,
} from "@/lib/transactions-slice";
import type { RootState, AppDispatch } from "@/lib/store";
import Modal from "../../common/modals/base-modal";
import StatusText from "../../common/status/status-text";
import FlagIcon from "../../common/flags/flag";
import { getSocket } from "../../../socket";
import { IndiaFlag, IranFlag, UsFlag } from "../../common/flags/flag-icons";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error }: { data: any; loading: any; error: any } =
    useSelector((state: RootState) => state.transactions);
  const transactions = data as unknown as TransactionType[];
  useEffect(() => {
    const socket = getSocket();

    socket.on(
      "transactions",
      (data: { transactions: TransactionType[]; currency: string }) => {
        dispatch(updateTransactionsList(data));
      },
    );

    // optional: clean up socket listeners
    return () => {
      socket.off("message");
    };
  }, [dispatch]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  const refetch = (currency: string) => {
    setDefaultCurrency({ currency });
    dispatch(fetchTransactions(currency)); // uses stored defaultCategory from state
  };
  return (
    <div className="p-6">
      <button
        onClick={() => {
          setIsModalOpen(true);
          refetch("usd");
        }}
        className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        View receiver
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="overflow-scroll bg-white p-50 [--pattern-fg:var(--color-gray-950)]/2">
          <div className="border-primary-dark border- flex h-96 w-full items-center justify-between p-24">
            <div className="flex flex-row gap-16">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">Taha Shokouhi</h1>
                <p className="text-sm text-gray-700">taha@email.com</p>
              </div>
              <p className="pt-8.5 font-bold text-amber-900">
                Send Them Money &rarr;
              </p>
            </div>

            <div className="flex items-center gap-16">
              <p className="w-[40px] rounded-4xl border-1 border-gray-200 p-[10px]">
                <svg
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="gray"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  ></path>
                </svg>
              </p>
              <button
                className="w-[40px] rounded-4xl border-1 border-gray-200 p-[10px]"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col gap-16 p-24">
            <p>Currencies they use:</p>
            <div className="flex flex-row gap-16">
              <div
                className="flex flex-col items-center gap-1 rounded-2xl border-2 border-gray-300 p-20"
                onClick={() => refetch("usd")}
              >
                <UsFlag size="60" />
                <p className="font-bold uppercase">usd</p>
                <p className="text-sm text-amber-900 underline">1 Account</p>
              </div>
              <div
                className="flex flex-col items-center gap-1 rounded-2xl border-2 border-gray-300 p-20"
                onClick={() => refetch("irr")}
              >
                <IranFlag size="513" />
                <p className="font-bold uppercase">irr</p>
                <p className="text-sm text-amber-900 underline">1 Account</p>
              </div>
              <div
                className="flex flex-col items-center gap-1 rounded-2xl border-2 border-gray-300 p-20"
                onClick={() => refetch("inr")}
              >
                <IndiaFlag size="40" />
                <p className="font-bold uppercase">inr</p>
                <p className="text-sm text-amber-900 underline">1 Account</p>
              </div>
            </div>
          </div>
          <div className="border-primary-dark flex h-96 w-full items-center justify-between p-24">
            <div className="flex flex-row gap-16">
              <p className="text-2xl font-bold">
                Transactions history with kasra
              </p>
            </div>

            <div className="flex items-center gap-16">
              <p className="w-[40px] pt-20">
                <svg
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="gray"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  ></path>
                </svg>
              </p>
              <p>
                <svg
                  className="w-[40px] rounded-4xl border-2 border-gray-200 p-[10px]"
                  data-slot="icon"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  ></path>
                </svg>
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between border-b-2 border-gray-100 p-24 text-left text-gray-400">
            <p className="w-[20px]">#</p>
            <p className="w-table-data p-5 text-left">Reference Number</p>
            <p className="w-table-data p-5">To</p>
            <p className="w-table-data p-5">Date & Time</p>
            <p className="w-table-data p-5">Paid with</p>
            <p className="w-table-data p-5">Amount</p>
            <p className="w-table-data p-5">Status</p>
            <p className="w-table-data p-5">Actions</p>
          </div>
          <div className="flex-col border-b-2 border-gray-100 pb-50">
            {transactions?.map((item, index) => (
              <div
                key={item._id}
                className={`flex w-full items-center justify-between p-10 ${index % 2 === 1 ? "bg-white" : "bg-gray-100"}`}
              >
                <p className="w-[20px]">{index + 1}</p>
                <p className="w-table-data p-5 text-left">
                  {item.referenceNumber}
                </p>
                <p className="w-table-data p-5">{item.to}</p>
                <p className="w-table-data max-w-[100px] p-5 text-center wrap-break-word">
                  {new Date(item.date).toLocaleString()}
                </p>
                <p className="w-table-data p-5">{item.paidWith}</p>
                <p className="w-table-data p-5">
                  <FlagIcon currency={item.currency} />
                  {` ${item.payment.amount} ${item.currency}`}
                </p>
                <p className="w-table-data p-5">
                  <StatusText status={item.status} />
                </p>
                <div className="flex w-[120px]">
                  <p className="w-[50px] text-blue-800">View</p>
                  <button
                    className="w-[50px] text-orange-400 underline"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/sample.docx";
                      link.download = "sample.docx";
                      link.click();
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-primary-dark flex h-96 w-full items-center justify-between p-24">
            <div className="flex flex-row gap-16 text-gray-400">
              <p className="text-1xl font-bold">
                You've created this customer on 22 Dec 2024
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
