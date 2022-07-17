export const containerStyles = {
    marginLeft: "10px",
    cursor: "pointer",
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center !important",
      justifyContent: "center !important",
    },
  },
  countContainerStyles = {
    marginRight: "5px",
    width: "35px",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    borderRadius: "50%",
    "@media screen and (max-width: 515px)": {
      marginRight: 0,
    },
  },
  titleContainerStyles = {
    minWidth: "63px",
    "> p": {
      textAlign: "center",
    },
  };
