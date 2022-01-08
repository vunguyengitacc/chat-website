import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";

const useRoomListStyle = makeStyles({
  surface: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  itemSpace: {
    width: "100%",
    height: "100px",
    borderBottom: "solid .5px #e7e7e7",
  },
});

export default useRoomListStyle;
