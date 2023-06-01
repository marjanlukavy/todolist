import { TextFieldProps } from "@mui/material";
import { ButtonProps } from "@mui/material";
import { InputHTMLAttributes } from "react";

export interface InputProps extends Omit<TextFieldProps, "variant"> {
  label: string;
  variant?: TextFieldProps["variant"];
  type?: string;
}

export interface CustomButtonProps extends ButtonProps {
  onClick?: () => void;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonText?: string;
}

export type InputSize = "small" | "medium";

export interface CustomInputProps {
  label: string;
  variant: "outlined" | "filled";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean | string;
  value?: string;
  name?: string;
  type: string;
  size?: "small" | "medium" | undefined;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  // helperText?: string;
}
