import { makeStyles } from "@mui/styles";

const useChatBoxStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  messageBox: {
    flex: 1,
    overflowY: "scroll",
  },
  sender: {
    width: "100%",
    height: "100px",
    borderTop: "solid 1px #e7e7e7",
  },
  //Drawer
  menu: {
    width: "30vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "80px",
    padding: "1vw",
    borderBottom: "solid .5px #e7e7e7",
  },
  paper: {
    borderLeft: "solid 2px #e7e7e7",
    boxShadow: "none",
  },
});

export default useChatBoxStyle;
