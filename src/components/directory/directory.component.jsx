import { Grid } from "@nextui-org/react";
import CategoryItem from "../category-item/category-item.component";
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
          xs={category.xs}
          md={category.md}
          lg={category.lg}
          xl={category.xl}
          justify="center"
          alignItems="center"
        >
          <CategoryItem {...category} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
