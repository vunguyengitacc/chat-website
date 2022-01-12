import { makeStyles } from "@mui/styles";

const useFriendSidebarStyle = makeStyles({
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
  list: {
    width: "100%",
    height: "87.5%",
    display: "flex",
    flexDirection: "column",
    padding: "15px",
    gap: "15px",
  },
});

export default useFriendSidebarStyle;
