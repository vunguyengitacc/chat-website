import { Box, Button } from "@mui/material";
import TextInput from "component/Input/TextInput";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useSearchBarStyle from "./style";

const SearchBar = () => {
  const navigator = useNavigate();
  const style = useSearchBarStyle();
  const form = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      term: "",
    },
  });

  const searchHandler = async (data: { term: string }) => {
    try {
      navigator(`?term=${data.term}`);
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
