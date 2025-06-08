export default function StatusText({
  status,
}: Readonly<{
  status: "Approved" | "Pending";
}>) {
  const getStatusClass = () => {
    switch (status) {
      case "Approved":
        return "text-green-600 p-5 bg-green-100 rounded-10 ";

      case "Pending":
        return "text-yellow-400 p-5 bg-yellow-100 rounded-10";
      default:
        return "text-gray-800";
    }
  };

  return <span className={getStatusClass()}>{status}</span>;
}
