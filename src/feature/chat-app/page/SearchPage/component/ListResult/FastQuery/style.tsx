import { makeStyles } from "@mui/styles";

const useFastQueryStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
});

export default useFastQueryStyle;
