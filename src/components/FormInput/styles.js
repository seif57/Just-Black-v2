import { styled, Input } from "@nextui-org/react";

const { Password } = Input;
export const StyledInput = styled(Input, {
  border: "none",
  borderRadius: "$lg",
  color: "white",
  boxShadow: "$xs",
  height: "$19",
  background: "#EAEAEA",
});

export const StyledPassword = styled(Password, {
  border: "none",
  borderRadius: "$lg",
  color: "black",
  boxShadow: "$xs",
  height: "$19",
  background: "#EAEAEA",
});
