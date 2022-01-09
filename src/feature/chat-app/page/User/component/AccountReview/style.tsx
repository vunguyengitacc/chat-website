import { makeStyles } from "@mui/styles";

const useAccountReviewStyle = makeStyles({
  surface: {
    padding: "30px 5% 20px 5%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  btnLogout: {
    padding: "5px 40px 5px 40px",
    border: "solid .5px #e7e7e7",
    color: "#e7e7e7",
    "&:hover": {
      color: "rgb(211 47 47 / 50%)",
    },
  },
  card: {
    display: "flex",
    width: "100%",
    gap: "10px",
    flexDirection: "column",
    padding: "10px",
    alignItems: "center",
  },
  inforCard: {
    display: "flex",
    width: "100%",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "70px",
    height: "70px",
  },
});

export default useAccountReviewStyle;
