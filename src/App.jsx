import { Directory } from "./components/directory/directory";

const categories = [
  {
    id: 1,
    title: "hats",
    size: 4,
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    size: 4,
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    size: 4,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    size: 6,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 5,
    size: 6,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
