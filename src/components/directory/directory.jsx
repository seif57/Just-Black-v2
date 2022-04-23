import { Grid } from "@nextui-org/react";
import CategoryItem from "../category-item/category-item";
export const Directory = ({ categories }) => {
  return (
    <Grid.Container
      css={{
        width: "80%",
        margin: "0 auto",
      }}
      justify="space-between"
      gap={2}
      alignItems="center"
    >
      {categories.map((category) => (
        <Grid
          key={category.id}
          xs={category.size}
          justify="center"
          alignItems="center"
        >
          <CategoryItem {...category} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
