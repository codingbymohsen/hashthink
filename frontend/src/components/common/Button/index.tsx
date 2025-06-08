import { cn } from "@/utils/cn";

import { ButtonPropse } from "./types";

export const Button = ({
  type,
  children,
  className,
  ...props
}: ButtonPropse) => {
  return (
    <button
      type={type ? type : "button"}
      {...props}
      className={cn(
        "rounded-10 !text-primary-lighter text-button-semibold relative min-h-48 min-w-130 cursor-pointer overflow-hidden bg-[linear-gradient(87.79deg,_#771DFD_6.19%,_#180633_142.18%)] px-16 py-8 before:absolute before:inset-0 before:bg-[linear-gradient(267.79deg,_#771DFD_6.19%,_#180633_142.18%)] before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:before:opacity-100",
        className,
      )}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
