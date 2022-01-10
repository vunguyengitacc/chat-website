import { makeStyles } from "@mui/styles";

const useAllResultStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100%",
    overflowY: "scroll",
    backgroundColor: "#f9f9f9",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export default useAllResultStyle;
