import React from "react";
import { Card, Col, Row, Text } from "@nextui-org/react";
import { MyStyledButton } from "./styles";
const CategoryItem = ({ title, imageUrl }) => {
  return (
    <Card hoverable cover>
      <Card.Body>
        <Row justify="center">
          <MyStyledButton auto ripple size="mysize" color="mycolor">
            <Col>
              <Text transform="uppercase" h2 color="#111111" weight="bold">
                {title}
              </Text>
              <Text transform="uppercase" h5 color="#111111">
                Shop Now
              </Text>
            </Col>
          </MyStyledButton>
        </Row>
        <Card.Image
          showSkeleton
          src={imageUrl}
          height={340}
          width="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
    </Card>
  );
};

export default CategoryItem;
