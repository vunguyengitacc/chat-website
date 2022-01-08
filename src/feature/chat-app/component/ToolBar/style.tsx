import { makeStyles } from "@mui/styles";
import { CSSProperties } from "react";

const useToolBarStyle = makeStyles({
  surface: {
    width: "5vw",
    height: "100vh",
    backgroundColor: "#7851cc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  link: {
    width: "5vw",
    height: "5vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  linkMatch: {
    width: "5vw",
    height: "5vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
});

export const activeStyle: CSSProperties = {
  backgroundColor: "#5b3aa3",
  padding: "10%",
  borderRadius: "10px",
  backgroundClip: "content-box",
  color: "rgb(137 101 217)",
};

export default useToolBarStyle;
