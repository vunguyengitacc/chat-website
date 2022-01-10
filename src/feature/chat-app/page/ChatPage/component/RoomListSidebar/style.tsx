import { makeStyles } from "@mui/styles";

const useRoomListSidebarStyle = makeStyles({
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
    height: "15%",
    backgroundColor: "white",
    borderBottom: "solid .5px #e7e7e7",
  },
  list: { width: "100%", height: "85%" },
});

export default useRoomListSidebarStyle;
