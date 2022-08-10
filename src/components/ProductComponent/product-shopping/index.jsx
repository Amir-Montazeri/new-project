import { Avatar, Button } from "@mui/material";
import "./index.scss";

function ProductShopping({
  ownerName,
  ownerProfileUrl,
  ownerLastVisit,
  category,
  setCommentsStatus,
}) {
  const lastActivityInMs =
      new Date().getTime() - new Date(ownerLastVisit).getTime(),
    lastActivityInDay = lastActivityInMs / (1000 * 3600 * 24);
  console.log(lastActivityInDay);

  const renderedLastActivity = () => {
    let result;
    if (lastActivityInDay < 0.0001) {
      result = "آنلاین";
    } else if (lastActivityInDay < 1) {
      result = "کمتر از یک روز";
    } else {
      result = `${Math.ceil(lastActivityInDay)} روز پیش`;
    }
    return result;
  };

  return (
    <div className="product-shopping-container">
      <h4>غرفه‌دار</h4>
      <div className="product-shopping-card">
        <div className="product-shopping-card-information">
          <Avatar
            src={ownerProfileUrl}
            variant="square"
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "5px",
              marginLeft: "10px",
            }}
          >
            {!ownerProfileUrl && ownerName}
          </Avatar>
          <div>
            <h5>{ownerName}</h5>
            <p>{category}</p>
          </div>
        </div>
        <div>
          <Button
            sx={{
              padding: "5px 40px",
              color: "#015077",
              bgcolor: "transparent",
              border: "5px solid #015077",
              fontSize: "19px",
            }}
            onClick={() => setCommentsStatus(true)}
          >
            گفت‌و‌گو
          </Button>
        </div>
      </div>
      <p>آخرین بازدید: {renderedLastActivity()}</p>
    </div>
  );
}

export default ProductShopping;
