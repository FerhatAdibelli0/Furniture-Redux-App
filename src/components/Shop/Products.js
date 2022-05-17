import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY = [
  {
    id: 1,
    name: "LED TV Stand",
    quantity: 1,
    price: 28,
    description: "TV Media Console for Living Room Bedroom Light Gray",
  },
  {
    id: 2,
    name: "Glass Door Storage TV Console",
    quantity: 1,
    price: 57,
    description: "A solid, sturdy piece of beautiful furniture",
  },
  {
    id: 3,
    name: "Holliday Corner TV Stand",
    quantity: 1,
    price: 45,
    description:
      "Hinged method construction allows for easy assembly in minutes",
  },
  {
    id: 4,
    name: "FirsTime & Co. Black Big Time",
    quantity: 1,
    price: 26,
    description: "This clock is so beautiful!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY.map((item) => (
          <ProductItem
            id={item.id}
            key={item.id}
            title={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
