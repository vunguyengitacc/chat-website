import { makeStyles } from "@mui/styles";
import { CSSProperties } from "react";

const useFilterSidebarStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
  },
  header: {
    width: "100%",
  },
  link: {
    textDecoration: "none",
    width: "100%",
    backgroundColor: "rgb(249 249 249)",
    padding: "0",
    borderRadius: "5px",
    color: "#b9b9b9",
  },
});

export const activeStyle: CSSProperties = {
  //   backgroundColor: "rgb(173 173 173)",
  //   color: "white",
};

export default useFilterSidebarStyle;
