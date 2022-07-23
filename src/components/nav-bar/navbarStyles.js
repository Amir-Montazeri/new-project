export const containerStyles = {
    position: "absolute",
    top: "5em",
    left: "-102%",
    height: "calc(100vh - 5em)",
    width: "330px",
    bgcolor: "#fff",
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
    left: 0,
  };
