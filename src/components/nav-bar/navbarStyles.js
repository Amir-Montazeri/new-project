export const containerStyles = {
    padding: "0 0 0 50px !important",
    position: "absolute",
    top: "5em",
    right: "-102%",
    height: "calc(100vh - 5em)",
    width: "330px",
    bgcolor: "#fff",
    boxShadow: "-1px 0 9px -4px #000",
    direction: "rtl",
    transition: ".5s",
    zIndex: 10,
    "@media screen and (max-width: 569px)": {
      height: "calc(100vh - 5em)",
    },
    "@media screen and (max-width: 500px)": {
      width: "100vw",
    },
  },
  activeNavStyles = {
    right: 0,
  },
  itemStyles = {
    position: "relative",
    padding: "12px 15px",
    borderBottom: "1px solid #999",
    cursor: "pointer",
  };
