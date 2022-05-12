import { Grid } from "@nextui-org/react";
import CategoryItem from "../category-item/category-item.component";
export const Directory = ({ categories }) => {
  return (
    <Grid.Container
      css={{
        w: "90%",
        m: "80px auto",
      }}
      justify="space-between"
      gap={2}
      alignItems="center"
    >
      {categories.map((category) => (
        <Grid
          key={category.id}
          xs={category.xs}
          sm={category.sm}
          md={category.md}
          lg={category.lg}
          justify="center"
          alignItems="center"
        >
          <CategoryItem {...category} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
