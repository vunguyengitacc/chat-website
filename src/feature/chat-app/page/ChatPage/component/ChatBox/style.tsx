import { makeStyles } from "@mui/styles";

const useChatBoxStyle = makeStyles({
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
