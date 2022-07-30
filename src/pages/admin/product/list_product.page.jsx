import { Col, Container, Row } from "react-bootstrap";
import { useEffect, Fragment, useState } from "react";
import "./product.style.scss";
import Etemad from "../../../assets/Images/Etemad.svg";
import setting from "../../../global/setting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { base_api_url } from "api";
import { Box, Grid, Typography } from "@mui/material";
import { BsFillStarFill } from "react-icons/bs";
import { toPersianNumber } from "functions/numbers";
import RenderedCategories from "./RenderedCategories";

const ProductItem = (item) => {
  return (
    <Box key={item.id} className="product-item">
      <Box className="product-item-banner">
        <img src={item.image1} alt={item.keyword} width="100%" />
      </Box>
      <Box className="p-from-corner">
        <Typography variant="h6" component="h3" className="text-right">
          {item.name}
        </Typography>
      </Box>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className="p-from-corner"
      >
        <Grid item>
          <BsFillStarFill
            className="star-container"
            size="15px"
            color="rgb(250, 176, 1)"
          />
          {toPersianNumber(item.score)}
        </Grid>
        <Grid item>
          <Typography sx={{ direction: "rtl !important" }}>
            تعداد {item.stock} موجود.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        className="p-from-corner"
      >
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: "900", direction: "rtl !important" }}
          >
            {toPersianNumber(item.price)} تومان
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

const ListProduct = (props) => {
  const [state, setState_] = useState({
    products: [],
    next: null,
  });
  const [categories, setCategories] = useState();
  const [selectedColors, setSelectedColors] = useState();
  const [selectedCategories, setSelectedCategories] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${base_api_url}/Load/`, {
        Headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data } = res;
        setState_({
          products: data.results,
          next: data.next,
        });
      });

    axios
      .get(`${base_api_url}/Catagory/`, {
        Headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data } = res;
        setCategories(data.category);
        setSelectedColors(data.colors);
      });
  }, []);

  useEffect(() => {
    if (selectedCategories) {
      axios
        .get(`${base_api_url}/search/product/?search=${selectedSubCategory}`, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const { data } = res;
          setState_({
            products: data.results,
            next: data.next,
          });
        })
        .catch((err) => {
          console.log("mmmmmmmmmmmmd: ", err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSubCategory]);

  console.log("state", state);

  return (
    <div className="customized-container">
      <div className="products-container">
        {state?.products
          ? state.products.map((product) => <ProductItem {...product} />)
          : null}
      </div>
      <ul className="categories-container">
        {categories && (
          <RenderedCategories
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedSubCategory={selectedSubCategory}
            setSelectedSubCategory={setSelectedSubCategory}
            selectedColors={selectedColors}
          />
        )}
      </ul>
    </div>
  );
};

export default ListProduct;
