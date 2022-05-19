import { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Popover } from "@nextui-org/react";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartIconContainer, ItemCount } from "./styles";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  return (
    <Popover offset={-70} isOpen={isCartOpen} onOpenChange={setIsCartOpen}>
      <Popover.Trigger>
        <CartIconContainer as="button">
          <ShoppingCartOutlinedIcon sx={{ fontSize: 35 }} />
          <ItemCount>0</ItemCount>
        </CartIconContainer>
      </Popover.Trigger>
      <Popover.Content
        css={{
          w: "270px",
          h: "340px",
        }}
      >
        <CartDropdown />
      </Popover.Content>
    </Popover>
  );
};

export default Cart;
