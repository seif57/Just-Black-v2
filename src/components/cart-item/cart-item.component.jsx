import { Text, Col, Image, Row } from "@nextui-org/react";
import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <Row>
      <Col>
        <Image src={imageUrl} alt={name} />
      </Col>
      <Row justify="center" align="center">
        <Col span={10}>
          <Text>{name}</Text>
          <Text>
            {quantity} x {price}
          </Text>
        </Col>
      </Row>
    </Row>
  );
};

export default CartItem;
