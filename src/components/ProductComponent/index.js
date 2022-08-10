import { base_api_url } from "api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./comments";
import Delivery from "./Delivery";
import DetailsProducts from "./DetailsProduct";
import ImageComponent from "./ImageComponent";
import "./index.css";
import OtherStoreProducts from "./other-store-products";
import Price from "./Price";
import ProductShopping from "./product-shopping";
import SellerDetail from "./SellerDetail";
import Storage from "./Storage";

const ProductComponent = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState();
  const [commentIsOpen, setCommentIsOpen] = useState(false);

  useEffect(() => {
    if (id) {
      setItemData(null);
      axios.get(`${base_api_url}/Product/${id}/`).then((res) => {
        const { data } = res;
        console.log({ data });
        setItemData(data);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const imageList = [
    itemData?.image1,
    itemData?.image2,
    itemData?.image3,
    itemData?.image4,
    itemData?.image5,
  ];

  return itemData ? (
    <div className="product-container">
      <ProductShopping
        ownerName={itemData.buissness_owner_name}
        ownerProfileUrl={itemData.buissness_owner_pic}
        category={itemData.category}
        ownerLastVisit={itemData.buissness_owner_last_visit}
        setCommentsStatus={(data) => setCommentIsOpen(data)}
      />
      <Comments
        isOpen={commentIsOpen}
        setIsOpen={() => setCommentIsOpen(false)}
        comments={itemData.comment}
      />
      {/* <div dir="rtl" className="container--product">
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
				<OtherStoreProducts otherProducts={itemData.others} /> */}
    </div>
  ) : null;
};

export default ProductComponent;