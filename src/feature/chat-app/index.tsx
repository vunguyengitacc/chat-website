import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import ToolBar from "./component/ToolBar";
import useChatAppStyle from "./style";

const ChatAppFeature = () => {
  const style = useChatAppStyle();
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
