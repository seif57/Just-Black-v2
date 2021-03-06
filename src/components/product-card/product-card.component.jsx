import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { Button, Card, Row, Text, Tooltip } from "@nextui-org/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <Card hoverable clickable>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          objectFit="cover"
          src={imageUrl}
          width="100%"
          height={320}
          alt={name}
        />
      </Card.Body>
      <Card.Footer
        css={{
          backgroundColor: "#161616",
        }}
        justify="flex-start"
      >
        <Row align="center" wrap="wrap" justify="space-between">
          <Text color="white" b>
            {name}
          </Text>
          <Tooltip
            color="invert"
            content="Add to cart"
            placement="bottomStart"
            offset={-70}
          >
            <Button
              onClick={addProductToCart}
              auto
              color="white"
              iconRight={<AddShoppingCartIcon />}
            >
              <Text
                css={{
                  color: "$accents6",
                  fontWeight: "$semibold",
                }}
              >
                ${price}
              </Text>
            </Button>
          </Tooltip>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
