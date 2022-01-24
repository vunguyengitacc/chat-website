import { Box, Typography } from "@mui/material";
import React from "react";
import useSearchPhotoStyle from "./style";

const SearchPhoto: React.FC = () => {
  const style = useSearchPhotoStyle();
  return <Box className={style.surface}></Box>;
};

export default SearchPhoto;
