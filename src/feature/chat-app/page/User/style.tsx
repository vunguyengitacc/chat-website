import { makeStyles } from "@mui/styles";

const useUserPageStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100vh",
    display: "flex",
  },
  sidebar: {
    width: "40%",
    height: "100vh",
    borderRight: "solid .5px #e7e7e7",
  },
  config: {
    width: "60%",
    height: "100vh",
  },
});

export default useUserPageStyle;
