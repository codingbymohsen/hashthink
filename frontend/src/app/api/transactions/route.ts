export async function GET() {
  return Response.json([
    {
      referenceNumber: "Alice",
      to: "to",
      date: new Date().toDateString(),
      paidWith: "ali",
      payment: { currency: "$", amount: 1000, country: "US" },
      status: "Approved",
    },
    {
      referenceNumber: "Alice",
      to: "to",
      date: new Date().toDateString(),
      paidWith: "ali",
      payment: { currency: "$", amount: 1000, country: "US" },
      status: "Approved",
    },
    {
      referenceNumber: "Alice",
      to: "to",
      date: new Date().toDateString(),
      paidWith: "ali",
      payment: { currency: "$", amount: 1000, country: "US" },
      status: "Pending",
    },
    {
      referenceNumber: "Alice",
      to: "to",
      date: new Date().toDateString(),
      paidWith: "ali",
      payment: { currency: "$", amount: 1000, country: "US" },
      status: "Approved",
    },
  ]);
}
