import { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Popover } from "@nextui-org/react";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { CartIconContainer, ItemCount } from "./styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  return (
    <Popover isOpen={isCartOpen} onOpenChange={setIsCartOpen}>
      <Popover.Trigger>
        <CartIconContainer as="button">
          <ShoppingCartOutlinedIcon sx={{ fontSize: 35 }} />
          <ItemCount>0</ItemCount>
        </CartIconContainer>
      </Popover.Trigger>
      <Popover.Content>
        <CartDropdown />
      </Popover.Content>
    </Popover>
  );
};

export default CartIcon;
