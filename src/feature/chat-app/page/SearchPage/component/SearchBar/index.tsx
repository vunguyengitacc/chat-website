import { Box, Button } from "@mui/material";
import userApi from "api/userApi";
import { AppDispatch, RootState } from "app/reduxStore";
import TextInput from "component/Input/TextInput";
import { IUser } from "model/User";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { doSearch } from "../../searchSlice";
import useSearchBarStyle from "./style";

const SearchBar = () => {
  const term = useSelector((state: RootState) => state.searchReducer.term);
  const dispatch = useDispatch<AppDispatch>();
  const style = useSearchBarStyle();
  const form = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      term: term,
    },
  });

  const searchHandler = async (data: { term: string }) => {
    try {
      dispatch(doSearch(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={style.surface}>
      <form
        onSubmit={form.handleSubmit(searchHandler)}
        className={style.formSpace}
      >
        <Box width="80%">
          <TextInput form={form} name="term" />
        </Box>
        <Button
          sx={{ height: "44px", width: "20%" }}
          variant="contained"
          color="secondary"
          disableElevation
          type="submit"
        >
          Search
        </Button>
      </form>
    </Box>
  );
};

export default SearchBar;
