import { makeStyles } from "@mui/styles";

const useChatHeaderStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  headerField: {
    height: "55%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchField: {
    height: "45%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",
  },
});

export default useChatHeaderStyle;
