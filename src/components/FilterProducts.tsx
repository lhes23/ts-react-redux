import { useDispatch, useSelector } from "react-redux";
// import { Product } from "../App";
import { setFilter } from "../redux/slices/ProductSlice";

const FilterProducts = () => {
  // const setFilterProd = useSelector(state => state.)
  const dispatch = useDispatch()
  return (
    <div>
      <input
        type="text"
        name="filterProd"
        id=""
        // onChange={(e) => setFilterProd(e.target.value)}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};
export default FilterProducts;
