import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/** This is the button component */
export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  "data-testid"?: string;
  size?: "sm" | "md" | "large";
};
