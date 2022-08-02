import { base_api_url } from "api";
import axios from "axios";
import ProductComponent from "components/ProductComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [itemData, setItemData] = useState();

  useEffect(() => {
    id &&
      axios.get(`${base_api_url}/Product/${id}/`).then((res) => {
        const { data } = res;
        console.log({ data });
        setItemData(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return itemData && <ProductComponent itemData={itemData} />;
};

export default Product;
