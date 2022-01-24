import { makeStyles } from "@mui/styles";
import { CSSProperties } from "react";

const useLinkSearchStyle = makeStyles({
  surface: {
    width: "100%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
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

export const activeCSS: CSSProperties = {
  backgroundColor: "#1976d2",
  color: "white",
};

export default useLinkSearchStyle;
