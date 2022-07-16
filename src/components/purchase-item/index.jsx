import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { containerStyles, contentStyles } from "./purchaseItemStyles";

function PurchaseItem({ picUrl, title, count, payStatus, price }) {
  return (
    <Grid container sx={containerStyles}>
      <Grid item sx={{ height: "100%" }}>
        <img src={picUrl} alt={title} height="100%" />
      </Grid>
      <Grid item sx={contentStyles}>
        <Typography variant="h6" component="h4">
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {count} بسته
        </Typography>
        <Typography component="p">
          <Typography variant="body1" component="span">
            {payStatus}
          </Typography>{" "}
          <Typography variant="body1" component="span">
            <Link to="/" style={{ color: "#009BE1", textDecoration: "none" }}>
              پیگیری ارسال
            </Link>
          </Typography>
        </Typography>
        <Typography component="p">
          <Typography variant="h6" component="span" color="#009BE1">
            {price}
          </Typography>{" "}
          <Typography variant="body1" component="span">
            تومان
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PurchaseItem;
