import { makeStyles } from "@mui/styles";
import { CSSProperties } from "react";

const useRoomItemStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  roomContent: {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    gap: "7.5px",
    padding: "0 5% 0 5%",
    color: "grey",
  },
  roomInfor: {
    width: "80%",
    height: "100%",
  },
  avatarField: {
    width: "20%",
  },
  topField: {
    height: "40%",
    display: "flex",
    lineHeight: "40%",
  },
  bottomField: {
    height: "60%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  nameField: {
    width: "75%",
    color: "#4a4a4a",
  },
  lastestActionTimeField: {
    width: "25%",
  },
});

export const activeRoomCSS: CSSProperties = {
  backgroundColor: "rgb(233 222 243)",
};

export default useRoomItemStyle;
