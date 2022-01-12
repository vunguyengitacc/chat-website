import { makeStyles } from "@mui/styles";
import { CSSProperties } from "react";

const useFriendItemStyle = makeStyles({
  surface: {
    width: "100%",
    padding: "10px",
    border: "solid .5px #e7e7e7",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    color: "#7a7a7a",
    borderRadius: "5px",
  },

  avatar: {
    width: "60px",
    height: "60px",
  },
});

export const activeFriendCSS: CSSProperties = {
  backgroundColor: "rgb(138 108 203)",
  color: "white",
};

export default useFriendItemStyle;
