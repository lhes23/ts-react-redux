import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ShowAllProducts = () => {
  const products = useSelector((state:RootState) => state.productSlice.products)
  const filterProd = useSelector((state:RootState) => state.productSlice.filterProd)
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
