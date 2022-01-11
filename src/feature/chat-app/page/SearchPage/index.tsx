import { Box, Button } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import FastSearchSidebar from "./component/FastSearchSidebar";
import FilterSidebar from "./component/FilterSidebar";
import SearchBar from "./component/SearchBar";
import useSearchPageStyle from "./style";

const SearchPage = () => {
  const style = useSearchPageStyle();
  return (
    <Box className={style.surface}>
      <Box className={style.searchField}>
        <Box className={style.searchBar}>
          <SearchBar />
        </Box>
      </Box>
      <Box className={style.resultField}>
        <Box className={style.filterBar}>
          <FilterSidebar />
          <FastSearchSidebar />
        </Box>
        <Box className={style.lstResult}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPage;
