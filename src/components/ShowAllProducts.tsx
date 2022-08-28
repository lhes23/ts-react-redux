import { Product } from "../App";

type Products = {
  products: Product[];
  filterProd: string;
};

const ShowAllProducts = ({ products, filterProd }: Products) => {
  return (
    <div>
      <h2>All Products</h2>
      {products
        ?.filter((prod) => prod.name.includes(filterProd))
        .map((product) => (
          <div key={product.id}>
            <p>
              {product.name} - {product.price} - {product.qty}
            </p>
          </div>
        ))}
    </div>
  );
};
export default ShowAllProducts;
