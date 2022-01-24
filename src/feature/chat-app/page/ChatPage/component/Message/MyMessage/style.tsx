import { makeStyles } from "@mui/styles";

const useMyMessageStyle = makeStyles({
  surface: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: "10px",
  },
  messsage: {
    maxWidth: "70%",
    textAlign: "end",
    backgroundColor: "#e5efff",
    padding: "20px",
    fontWeight: 500,
    borderRadius: "10px",
    margin: "10px 0 10px 0",
  },
});

export default useMyMessageStyle;
