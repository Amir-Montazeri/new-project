export const containerStyles = {
    width: "100vw",
  },
  mainContainerStyles = {
    height: "260px",
    width: "100vw",
    background: "#C9DAE2",
    "@media screen and (max-width: 550px)": {
      height: "193px",
    },
  },
  searchbarContainerStyles = {
    width: "60% !important",
  },
  inputContainerStyles = {
    width: "400px",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    outline: "none !important",
    border: "none !important",
    borderRadius: "13px",
    overflow: "hidden",
    "> *": {
      display: "flex",
      justifyContent: "space-between",
    },
    "@media screen and (max-width: 645px)": {
      height: "41px",
    },
  },
  inputStyles = {
    padding: "10px 7px",
    direction: "rtl",
    ml: 1,
    flex: 1,
  },
  submitBtnStyles = {
    margin: "15px 20px",
    padding: "5px 60px",
    background: "#005078",
    color: "#fff",
    borderRadius: "20px",
    ":hover": {
      background: "#005078",
    },
  },
  selectContainerStyles = {
    width: "27%",
    display: "flex",
    flexWrap: "nowrap !important",
    alignItems: "center",
    background: "#F1F8FC",
    border: "none !important",
    flexDirection: "row-reverse",
    borderRadius: "0 !important",
    overflowX: "hidden",
    "*": {
      border: "none !important",
      outline: "none !important",
    },
    " .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "0 30px 0 0 !important",
        maxWidth: "70px",
        overflowX: "hidden",
      },
    " .css-78trlr-MuiButtonBase-root-MuiIconButton-root": {
      padding: "8pxs 4px",
    },
    "@media screen and (max-width: 645px)": {
      width: "110px",
    },
  },
  logoContainer = {
    height: "80%",
    "> img": {
      height: "100%",
    },
    "@media screen and (max-width: 630px)": {
      height: "auto",
      width: "35%",
      "> img": {
        height: "auto",
        width: "100%",
      },
    },
  };
