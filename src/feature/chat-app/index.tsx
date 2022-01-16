import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { RootState } from "app/reduxStore";
import useSocket from "hook/useSocket";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ToolBar from "./component/ToolBar";
import { roomSelector } from "./roomSlice";
import useChatAppStyle from "./style";

const ChatAppFeature = () => {
  const style = useChatAppStyle();
  const { connect } = useSocket();
  const rooms = useSelector((state: RootState) =>
    roomSelector.selectAll(state)
  );

  useEffect(() => {
    rooms.length > 0 && connect(rooms);
  }, [rooms]);

  return (
    <Paper className={style.surface}>
      <ToolBar />
      <Box width="95vw" height="100vh">
        <Outlet />
      </Box>
    </Paper>
  );
};

export default ChatAppFeature;
