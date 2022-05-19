import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";
import { Button, Grid, Text } from "@nextui-org/react";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <Grid.Container justify="center" gap={2}>
      {cartItems.length === 0 ? (
        <Grid
          css={{
            margin: "50px auto",
          }}
          justify="center"
          alignContent="center"
          xs={12}
        >
          <Text h4>Your cart is empty !!</Text>
        </Grid>
      ) : (
        cartItems.map((cartItem) => (
          <Grid
            xs={12}
            justify="center"
            alignContent="flex-end"
            key={cartItem.id}
          >
            <CartItem cartItem={cartItem} />
          </Grid>
        ))
      )}
      <Grid
        css={{
          marginTop: "auto",
        }}
      >
        <Button
          size="lg"
          css={{
            border: "1px solid $accents6",
            color: "$accents1",
            fontWeight: "$semibold",
            background: "$accents9",
          }}
          color="default"
          iconRight={<ShoppingCartCheckoutOutlinedIcon />}
        >
          Checkout
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default CartDropdown;
