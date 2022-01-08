import { Box } from "@mui/system";
import "component/Loading/style.css";

const Loading = () => {
  return (
    <Box width="100%" height="100%">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
      </div>
    </Box>
  );
};

export default Loading;
