import { Button, Card, Row, Text, Tooltip } from "@nextui-org/react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = ({ product }) => {
  return (
    <Card hoverable clickable>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          objectFit="cover"
          src={product.imageUrl}
          width="100%"
          height={320}
          alt={product.name}
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
            {product.name}
          </Text>
          <Tooltip color="invert" content="Add to cart" placement="bottomStart">
            <Button auto color="white" iconRight={<AddShoppingCartIcon />}>
              <Text
                css={{
                  color: "$accents6",
                  fontWeight: "$semibold",
                }}
              >
                ${product.price}
              </Text>
            </Button>
          </Tooltip>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
