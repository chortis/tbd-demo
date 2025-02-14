import { ButtonProps } from "./Button.types";

export const Button = ({ size = "md", ...props }: ButtonProps) => (
  <button {...props} />
);
