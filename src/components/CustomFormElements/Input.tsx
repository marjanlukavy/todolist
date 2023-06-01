import React, { InputHTMLAttributes } from "react";

import { StyledInput } from "../Styles";
import { CustomInputProps } from "./types";

const Input: React.FC<CustomInputProps> = ({ label, variant, ...rest }) => {
  const { error } = rest;

  return (
    <>
      <StyledInput
        required
        label={label}
        variant={variant}
        sx={{ borderRadius: "5px" }}
        {...rest}
        error={!!error}
        helperText={error || ""}
      />
    </>
  );
};

export default Input;
