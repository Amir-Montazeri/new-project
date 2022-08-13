import "./index.scss";
import { Button } from "@mui/material";

function PurchaseLayout({
  title,
  buttonText,
  children,
  backStepIcon,
  onFormSubmited,
}) {
  return (
    <form
      className="purchase-layout-container"
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmited();
      }}
    >
      <div className="purchase-layout-card">
        <div className="purchase-layout-title">
          {backStepIcon}
          <h5>{title}</h5>
        </div>
        {children}
        <div className="purchase-layout-button-container">
          <Button fullWidth type="submit">
            {buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
}

export default PurchaseLayout;
