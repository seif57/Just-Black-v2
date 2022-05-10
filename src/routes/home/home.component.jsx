import React from "react";
import { Directory } from "../../components/directory/directory.component";
const categories = [
  {
    id: 1,
    title: "hats",
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
    imageUrl: {
      src: "https://i.ibb.co/cvpntL1/hats.png",
      alt: "hats",
    },
  },
  {
    id: 2,
    title: "jackets",
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
    imageUrl: {
      src: "https://i.ibb.co/px2tCc3/jackets.png",
      alt: "jackets",
    },
  },
  {
    id: 3,
    xs: 12,
    sm: 6,
    md: 12,
    lg: 4,
    title: "sneakers",
    imageUrl: {
      src: "https://i.ibb.co/0jqHpnp/sneakers.png",
      alt: "sneakers",
    },
  },
  {
    id: 4,
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    title: "womens",
    imageUrl: {
      src: "https://i.ibb.co/GCCdy8t/womens.png",
      alt: "womens",
    },
  },
  {
    id: 5,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    title: "mens",
    imageUrl: {
      src: "https://i.ibb.co/R70vBrQ/men.png",
      alt: "men",
    },
  },
];
const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
