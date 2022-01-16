import { makeStyles } from "@mui/styles";

const useOtherMessageStyle = makeStyles({
  surface: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  avatar: {
    margin: "10px",
  },
  messsage: {
    maxWidth: "70%",
    backgroundColor: "#e9e9e9",
    padding: "20px",
    color: "#878787",
    fontWeight: 700,
    borderRadius: "10px",
    margin: "10px 0 10px 0",
  },
});

export default useOtherMessageStyle;
