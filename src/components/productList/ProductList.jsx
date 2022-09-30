import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import Ecommerce from "../../img/Netflix.png"
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Akash</h1>
        <p className="pl-desc">
          These are some Projects related to my skills
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={Ecommerce} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
