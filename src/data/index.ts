import data from "./royal.json";

if (!data) {
  // deal with error...
}

const accueil = data["accueil"];
const products = data["products"];
const categories = Object.keys(products);

const productList = Object.entries(products)
  .map(([category, productRanges]) => {
    return Object.entries(productRanges).map(([range, products]) => {
      return products.map((product) => {
        return {
          ...product,
          category,
          range,
        };
      });
    });
  })
  .flat(3);

type Accueil = typeof accueil;
type Products = typeof products;
type Categories = typeof categories;

export type { Accueil, Products, Categories };

export { accueil, products, categories, productList };

export default data;
