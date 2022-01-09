import { makeStyles } from "@mui/styles";

const useUserConfigStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    width: "100%",
    borderBottom: "solid .5px #e7e7e7",
    padding: "10px",
  },
  config: {
    width: "100%",
    overflowY: "scroll",
    padding: "30px 5% 30px 5%",
  },
});

export default useUserConfigStyle;
