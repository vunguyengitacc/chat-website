import { makeStyles } from "@mui/styles";

const useRoomCreatorStyle = makeStyles({
  frmSelectMember: {
    width: "40vw",
    maxHeight: "80vh",
    margin: "10vh 30vw",
  },
  frmCreate: {
    width: "40vw",
    maxHeight: "80vh",
    margin: "10vh 30vw",
  },
  surface: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    height: "100%",
  },
  lstFriend: {
    flexGrow: 1,
    overflowY: "scroll",
    marginBottom: "10px",
  },
  itemFriend: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  btnGroup: {
    display: "flex",
    gap: "10px",
  },
});

export default useRoomCreatorStyle;
