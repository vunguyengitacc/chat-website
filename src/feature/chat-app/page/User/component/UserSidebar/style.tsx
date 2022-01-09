import { makeStyles } from "@mui/styles";

const useUserSidebarStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    height: "90px",
    borderBottom: "solid .5px #e7e7e7",
    padding: "10px",
  },
  review: {
    width: "100%",
    height: "100vh",
    overflowY: "scroll",
    backgroundColor: "#f9f9f9",
  },
});

export default useUserSidebarStyle;
