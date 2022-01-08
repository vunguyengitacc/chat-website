import { makeStyles } from "@mui/styles";

const useFriendListStyle = makeStyles({
  surface: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRight: "solid .5px #e7e7e7",
  },
  header: {
    width: "100%",
    height: "12.5%",
    backgroundColor: "white",
    borderBottom: "solid .5px #e7e7e7",
  },
  list: { width: "100%", height: "87.5%" },
});

export default useFriendListStyle;
