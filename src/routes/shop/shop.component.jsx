import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import Grid from "@nextui-org/react/grid";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <Grid.Container
      //Figure out how to make this grid responsive
      css={{
        width: "90%",
        margin: "80px auto",
      }}
      gap={2}
      justify="flex-start"
    >
      {products.map((product) => (
        <Grid xs={12} sm={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default Shop;
