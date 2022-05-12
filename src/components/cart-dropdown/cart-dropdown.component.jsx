import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { Button } from "@mui/material";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Button>ChecK Out </Button>
    </div>
  );
};

export default CartDropdown;
