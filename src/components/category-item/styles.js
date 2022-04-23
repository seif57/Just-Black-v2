import { styled, Button } from "@nextui-org/react";

export const MyStyledButton = styled(Button, {
  position: "absolute",
  top: "100px",
  zIndex: "1",
  opacity: "0.5",
  boxShadow: "$md", // shadows.md
  variants: {
    size: {
      mysize: {
        height: "150px",
        width: "250px",
        borderRadius: "$lg",
      },
    },
    color: {
      mycolor: {
        background: "white",
        color: "$gray900",
        border: "$space$1 solid transparent",
        "&:hover": {
          background: "$gray100",
          color: "$gray300",
        },
        "&:active": {
          background: "$gray300",
        },
        "&:focus": {
          borderColor: "white",
        },
      },
    },
  },
});
