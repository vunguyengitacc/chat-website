import { makeStyles } from "@mui/styles";
import { CSSProperties } from "react";

const useFastSearchSidebarStyle = makeStyles({
  surface: {
    width: "100%",
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

export default useFastSearchSidebarStyle;
