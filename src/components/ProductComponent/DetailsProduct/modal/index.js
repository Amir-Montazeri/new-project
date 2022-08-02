import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  closeIconStyles,
  containerStyles,
  modalContainerStyles,
} from "./modalStyles";

function Modal({ open, handleClose, children }) {
  const [isOpen, setIsOpen] = useState(open);

  return open ? (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={containerStyles}
    >
      <Grid item sx={modalContainerStyles}>
        <Box
          sx={closeIconStyles}
          onClick={() => {
            setIsOpen(false);
            // handleClose && handleClose();
            handleClose(false);
          }}
        >
          <AiOutlineCloseCircle size="25px" color="#000" />
        </Box>
        {children}
      </Grid>
    </Grid>
  ) : null;
}

export default Modal;
