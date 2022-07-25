import { Col, Container, Row } from "react-bootstrap";
import { useEffect, Fragment, useState } from "react";
import "./product.style.scss";
import Etemad from "../../../assets/Images/Etemad.svg";
import setting from "../../../global/setting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ProductItem = (props) => {
  console.log("::: ", props);
  const { name, image1 } = props;
  return (
    <div className="product-list-item d-flex" style={{ direction: "rtl" }}>
      <div>
        <img src={image1} />
        <FontAwesomeIcon
          className="font-size-10 color-secondary"
          icon={faStar}
        />
        <FontAwesomeIcon
          className="font-size-10 color-secondary"
          icon={faStar}
        />
        <FontAwesomeIcon
          className="font-size-10 color-secondary"
          icon={faStar}
        />
        <FontAwesomeIcon className="font-size-10" icon={faStar} />
        <FontAwesomeIcon className="font-size-10" icon={faStar} />
      </div>
      <div className="p-2">
        <p className="p-0 mb-0 font-size-15">{name}</p>
        {/* <p className="p-0 mb-1 font-size-15 color-textpill">150 بسته</p> */}
        <p className="p-0 mb-1 font-size-15 color-textpill">
          قیمت واحد 45120 تومان
        </p>
        {/* <a className="font-size-13 secondary-link" href="#">
          ویرایش محصول
        </a> */}
      </div>
    </div>
  );
};

const ListProduct = (props) => {
  const [state, setState_] = useState({
    products: [],
    next: null,
  });

  console.log(state);
  useEffect(() => {
    axios
      .get(`${setting.baseUrl}Load/`, {
        Headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data } = res;
        console.log(res);
        setState_({
          products: data.results,
          next: data.next,
        });
      });
  }, []);

  return (
    <Container className="card">
      {state.products
        ? state.products.map((product) => <ProductItem {...product} />)
        : null}
    </Container>
  );
};

export default ListProduct;
