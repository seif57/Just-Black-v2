import React from "react";
import { StyledInput, StyledPassword } from "./styles";
import PasswordIcon from "@mui/icons-material/Password";

const FormInput = ({ onChange, placeholder, password, ...props }) => {
  return password ? (
    <StyledPassword
      size="lg"
      clearable
      bordered
      fullWidth
      placeholder={placeholder}
      onChange={onChange}
      aria-label={placeholder}
      contentLeft={<PasswordIcon />}
      required
      {...props}
    />
  ) : (
    <StyledInput
      size="lg"
      clearable
      bordered
      fullWidth
      placeholder={placeholder}
      onChange={onChange}
      aria-label={placeholder}
      required
      {...props}
    />
  );
};

export default FormInput;
