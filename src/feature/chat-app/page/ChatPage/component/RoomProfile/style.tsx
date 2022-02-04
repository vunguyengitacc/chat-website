import { makeStyles } from "@mui/styles";

const useRoomProfileStyles = makeStyles({
  surface: {
    width: "100%",
    height: "100%",
  },
  //member
  memberField: {
    maxHeight: "500px",
    padding: "10px",
  },
  memberList: {
    display: "flex",
    maxHeight: "400px",
    overflowY: "scroll",
    flexDirection: "column",
    gap: "10px",
  },
  memberItem: {
    display: "flex",
    paddingRight: "10px",
    alignItems: "center",
    gap: "10px",
    justifyContent: "space-between",
  },
  memberItemInfor: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
});

export default useRoomProfileStyles;
