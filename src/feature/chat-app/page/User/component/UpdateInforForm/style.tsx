import { makeStyles } from "@mui/styles";

const useUpdateInforFormStyle = makeStyles({
  surface: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    backgroundColor: "white",
    padding: "20px",
  },
  inputItemLeft: {
    paddingRight: "10px",
  },
  inputItemRight: {
    paddingLeft: "10px",
  },
  submitField: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "20px",
    borderTop: "solid .5px #e7e7e7",
  },
});

export default useUpdateInforFormStyle;
