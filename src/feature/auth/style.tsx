import { makeStyles } from "@mui/styles";

const useAuthStyle = makeStyles({
  surface: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
  },
  content: {
    width: "80vw",
    height: "70vh",
    marginBottom: "10vh",
    borderRadius: "20px",
    backgroundColor: "white",
    boxSizing: "border-box",
    padding: "20px",
    display: "flex",
  },
  logoField: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default useAuthStyle;
