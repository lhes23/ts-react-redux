import { Product } from "../App";

interface IProps {
  setFilterProd: React.Dispatch<React.SetStateAction<string>>;
}

const FilterProducts = ({ setFilterProd }: IProps) => {
  return (
    <div>
      <input
        type="text"
        name="filterProd"
        id=""
        onChange={(e) => setFilterProd(e.target.value)}
      />
    </div>
  );
};
export default FilterProducts;
