import { makeStyles } from "@mui/styles";

const useFriendReviewStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100vh",
    overflowY: "scroll",
    padding: "30px 5% 20px 5%",
  },
  card: {
    display: "flex",
    width: "100%",
    gap: "15px",
    flexDirection: "column",
    padding: "20px",
    alignItems: "center",
    marginBottom: "20px",
  },
  inforCard: {
    display: "flex",
    width: "100%",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  avatar: {
    width: "100px",
    height: "100px",
  },
  btnAction: {
    width: "150px",
  },
});

export default useFriendReviewStyle;
