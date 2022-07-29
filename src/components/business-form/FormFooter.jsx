import { Button } from "@mui/material";
import { buttonStyles } from "./buttonStyles";

function FormFooter() {
  return (
    <Button type="submit" sx={buttonStyles}>
      تایید
    </Button>
  );
}

export default FormFooter;
