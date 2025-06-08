import { IndiaFlag, IranFlag } from "./india";

export default function FlagIcon({
  currency,
}: Readonly<{
  currency: string;
}>) {
  const getStatusClass = () => {
    switch (currency) {
      case "usd":
        return (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 305.2 38.4"
            style={{ background: "new 0 0 55.2 38.4" }}
            xmlSpace="preserve"
          >
            <style type="text/css">
              {`.st0{fill:#B22234;} .st1{fill:#FFFFFF;} .st2{fill:#3C3B6E;}`}
            </style>
            <g>
              <path
                className="st0"
                d="M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z"
              />
              <path
                className="st1"
                d="M0.02,2.73h55.17c0.01,0.1,0.02,0.2,0.02,0.31v2.94H0V3.03C0,2.93,0.01,2.83,0.02,2.73L0.02,2.73z M55.2,8.67 v3.24H0V8.67H55.2L55.2,8.67z M55.2,14.61v3.24H0v-3.24H55.2L55.2,14.61z M55.2,20.55v3.24H0v-3.24H55.2L55.2,20.55z M55.2,26.49 v3.24H0v-3.24H55.2L55.2,26.49z M55.2,32.43v2.93c0,0.1-0.01,0.21-0.02,0.31H0.02C0.01,35.58,0,35.47,0,35.37v-2.93H55.2 L55.2,32.43z"
              />
              <path
                className="st2"
                d="M20.8,0v20.68H0V3.03C0,1.36,1.36,0,3.03,0H20.8L20.8,0L20.8,0z"
              />
              <polygon
                className="st1"
                points="1.23,2.86 1.92,5.01 0.1,3.68 2.36,3.68 0.53,5.01 1.23,2.86"
              />
              <polygon
                className="st1"
                points="1.23,7.02 1.92,9.17 0.1,7.84 2.36,7.84 0.53,9.17 1.23,7.02"
              />
              <polygon
                className="st1"
                points="1.23,11.18 1.92,13.33 0.1,12 2.36,12 0.53,13.33 1.23,11.18"
              />
              <polygon
                className="st1"
                points="1.23,15.34 1.92,17.49 0.1,16.16 2.36,16.16 0.53,17.49 1.23,15.34"
              />
              <polygon
                className="st1"
                points="3.67,0.78 4.37,2.93 2.54,1.6 4.81,1.6 2.97,2.93 3.67,0.78"
              />
              <polygon
                className="st1"
                points="3.67,4.94 4.37,7.09 2.54,5.76 4.81,5.76 2.97,7.09 3.67,4.94"
              />
              <polygon
                className="st1"
                points="3.67,9.1 4.37,11.25 2.54,9.92 4.81,9.92 2.97,11.25 3.67,9.1"
              />
              <polygon
                className="st1"
                points="3.67,13.26 4.37,15.41 2.54,14.08 4.81,14.08 2.97,15.41 3.67,13.26"
              />
              <polygon
                className="st1"
                points="3.67,17.42 4.37,19.57 2.54,18.24 4.81,18.24 2.97,19.57 3.67,17.42"
              />
              <polygon
                className="st1"
                points="6.12,2.86 6.82,5.01 4.99,3.68 7.25,3.68 5.42,5.01 6.12,2.86"
              />
              <polygon
                className="st1"
                points="6.12,7.02 6.82,9.17 4.99,7.84 7.25,7.84 5.42,9.17 6.12,7.02"
              />
              <polygon
                className="st1"
                points="6.12,11.18 6.82,13.33 4.99,12 7.25,12 5.42,13.33 6.12,11.18"
              />
              <polygon
                className="st1"
                points="6.12,15.34 6.82,17.49 4.99,16.16 7.25,16.16 5.42,17.49 6.12,15.34"
              />
              <polygon
                className="st1"
                points="8.57,0.78 9.26,2.93 7.44,1.6 9.7,1.6 7.87,2.93 8.57,0.78"
              />
              <polygon
                className="st1"
                points="8.57,4.94 9.26,7.09 7.44,5.76 9.7,5.76 7.87,7.09 8.57,4.94"
              />
              <polygon
                className="st1"
                points="8.57,9.1 9.26,11.25 7.44,9.92 9.7,9.92 7.87,11.25 8.57,9.1"
              />
              <polygon
                className="st1"
                points="8.57,13.26 9.26,15.41 7.44,14.08 9.7,14.08 7.87,15.41 8.57,13.26"
              />
              <polygon
                className="st1"
                points="8.57,17.42 9.26,19.57 7.44,18.24 9.7,18.24 7.87,19.57 8.57,17.42"
              />
              <polygon
                className="st1"
                points="11.01,2.86 11.71,5.01 9.88,3.68 12.14,3.68 10.31,5.01 11.01,2.86"
              />
              <polygon
                className="st1"
                points="11.01,7.02 11.71,9.17 9.88,7.84 12.14,7.84 10.31,9.17 11.01,7.02"
              />
              <polygon
                className="st1"
                points="11.01,11.18 11.71,13.33 9.88,12 12.14,12 10.31,13.33 11.01,11.18"
              />
              <polygon
                className="st1"
                points="11.01,15.34 11.71,17.49 9.88,16.16 12.14,16.16 10.31,17.49 11.01,15.34"
              />
              <polygon
                className="st1"
                points="13.46,0.78 14.16,2.93 12.33,1.6 14.59,1.6 12.76,2.93 13.46,0.78"
              />
            </g>
          </svg>
        );
      case "irr":
        return <IranFlag size="15313" />;
      case "inr":
        return <IndiaFlag size="156" />;
      default:
        return <span className="text-gray-800">Unknown flag</span>;
    }
  };

  return <span>{getStatusClass()}</span>;
}
