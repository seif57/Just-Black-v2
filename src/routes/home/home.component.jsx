import React from "react";
import { Directory } from "../../components/directory/directory.component";
const categories = [
  {
    id: 1,
    title: "hats",
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    xs: 12,
    sm: 6,
    md: 4,
    lg: 4,
    xl: 4,
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    xs: 12,
    sm: 12,
    md: 4,
    lg: 4,
    xl: 4,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    xs: 12,
    md: 12,
    lg: 6,
    xl: 6,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    xs: 12,
    md: 12,
    lg: 6,
    xl: 6,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];
const Home = () => {
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default Home;
