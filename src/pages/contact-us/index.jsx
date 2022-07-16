import { Box } from "@mui/material";
import ContactUsComponent from "components/contact-us-component";
import { containerStyles } from "./contactUsStyles";

const ContactUs = () => {
  return (
    <Box sx={containerStyles}>
      <ContactUsComponent />
    </Box>
  );
};

export default ContactUs;
