import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import Grid from "@nextui-org/react/grid";
import ProductCard from "../../components/product-card/product-card.component";
import { Spacer } from "@nextui-org/react";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Grid.Container
      css={{
        w: "90%",
        m: "80px auto",
      }}
      gap={4}
      justify="flex-start"
    >
      {products.map((product) => (
        <Grid xs={12} sm={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Shop;
