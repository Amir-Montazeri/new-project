import { Button } from "@mui/material";
import { preparedPrice } from "functions/numbers";
import { Link } from "react-router-dom";
import "./index.scss";

function BuyProduct({ productPrice = "", productID }) {
  return (
    <div className="buy-product-container">
      <div className="buy-product-information">
        <div>
          <h3>فروش محصول:</h3>
          <p></p>
        </div>
        <div>
          <h3>ارسال غرفه دار:</h3>
          <p></p>
        </div>
        <div>
          <h3>ارسال از:</h3>
          <p>test</p>
        </div>
      </div>
      <div>
        <div className="buy-product-price">
          <h3>قیمت محصول:</h3>
          <p>{preparedPrice(productPrice)}</p>
        </div>
        <div className="buy-product-buy-button">
          <Link to={`/product/${productID}/buy`}>
            <Button fullWidth>خرید محصول</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
