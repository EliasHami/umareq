import data from "./royal.json";

if (!data) {
  // deal with error...
}

const accueil = data["accueil"];
const products = data["products"];
const categories = Object.keys(products);

type Accueil = typeof accueil;
type Products = typeof products;
type Categories = typeof categories;

export type { Accueil, Products, Categories };

export { accueil, products, categories };

export default data;
