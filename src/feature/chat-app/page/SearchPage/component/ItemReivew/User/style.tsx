import { makeStyles } from "@mui/styles";

const useUserItemReviewStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5%",
    gap: "30px",
  },
  avatar: {
    width: "50%",
    height: "auto",
  },
  grpButton: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: "5%",
  },
});

export default useUserItemReviewStyle;
