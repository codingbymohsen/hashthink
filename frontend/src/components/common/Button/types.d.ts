import { HTMLProps } from "react";

type ButtonTypes = "button" | "submit" | "reset";

export interface ButtonPropse extends HTMLProps<HTMLButtonElement> {
  type?: ButtonTypes;
}
