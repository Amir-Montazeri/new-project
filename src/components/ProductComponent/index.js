import Delivery from "./Delivery";
import DetailsProducts from "./DetailsProduct";
import ImageComponent from "./ImageComponent";
import "./index.css";
import Price from "./Price";
import SellerDetail from "./SellerDetail";
import Storage from "./Storage";

const ProductComponent = ({ itemData }) => {
  const imageList = [
    itemData.image1,
    itemData.image2,
    itemData.image3,
    itemData.image4,
    itemData.image5,
  ];

  console.log(itemData);

  return (
    <div dir="rtl" className="container--product">
      <div>
        <ImageComponent banners={imageList} />
      </div>
      <div className="product-main">
        <div className="prduct-secondery">
          <div>
            <DetailsProducts itemData={itemData} />
          </div>

          <div className="seller--and--price">
            <SellerDetail />
            <Storage />
            <Price productPrice={itemData.price} />
          </div>
        </div>
        <Delivery />
      </div>
    </div>
  );
};

export default ProductComponent;
