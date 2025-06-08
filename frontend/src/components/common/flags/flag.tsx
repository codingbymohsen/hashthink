import { IndiaFlag, IranFlag, UsFlag } from "./flag-icons";

export default function FlagIcon({
  currency,
}: Readonly<{
  currency: string;
}>) {
  const getStatusClass = () => {
    switch (currency) {
      case "usd":
        return <UsFlag size="305" />;
      case "irr":
        return <IranFlag size="2813" />;
      case "inr":
        return <IndiaFlag size="156" />;
      default:
        return <span className="text-gray-800">Unknown flag</span>;
    }
  };

  return <span>{getStatusClass()}</span>;
}
