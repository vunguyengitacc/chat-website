import { Box, Typography } from "@mui/material";
import React from "react";
import useReviewItemStyle from "./style";

interface IProps {
  value: string;
  label: string;
}

const ReviewItem: React.FC<IProps> = ({ value, label, children }) => {
  const style = useReviewItemStyle();
  return (
    <Box className={style.surface}>
      <Box>
        <Typography variant="subtitle2">
          <b>{label}</b>
        </Typography>
        <Typography variant="subtitle1">{value}</Typography>
      </Box>
      <Box display="flex" alignItems="center">
        {children}
      </Box>
    </Box>
  );
};

export default ReviewItem;
