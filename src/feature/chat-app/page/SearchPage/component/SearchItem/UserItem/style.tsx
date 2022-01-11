import { makeStyles } from "@mui/styles";

const useUserSearchItemStyle = makeStyles({
  surface: {
    padding: "10px 20px 10px 20px",
    marginBottom: "20px",
    cursor: "pointer",
    borderRadius: "10px",
    //boxShadow: "none",
    border: "solid .5px #e7e7e7",
  },
  avatar: {
    width: "60px",
    height: "60px",
  },
  modalReview: {
    backgroundColor: "white",
    width: "60vw",
    height: "80vh",
    margin: "10vh 20vw 10vh 20vw",
  },
});

export default useUserSearchItemStyle;
