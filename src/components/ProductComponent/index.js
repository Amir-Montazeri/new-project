import Delivery from "./Delivery";
import DetailsProducts from "./DetailsProduct";
import ImageComponent from "./ImageComponent";
import "./index.css";
import Price from "./Price";
import SellerDetail from "./SellerDetail";
import Storage from "./Storage";

const ProductComponent = () => {
  return (
    <div dir="rtl" className="container--product">
      <div>
        <ImageComponent />
      </div>
      <div className="product-main">
        <div className="prduct-secondery">
          <div>
            <DetailsProducts />
          </div>

          <div className="seller--and--price">
            <SellerDetail />
            <Storage />
            <Price />
          </div>
        </div>
        <Delivery />
      </div>
    </div>
  );
};

export default ProductComponent;
