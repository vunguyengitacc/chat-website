import { makeStyles } from "@mui/styles";

const useRegisterPageStyle = makeStyles({
  surface: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  frmContent: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  btnLogin: {
    padding: "16.5px 14px",
  },
});

export default useRegisterPageStyle;
