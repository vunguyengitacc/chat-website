import { makeStyles } from "@mui/styles";

const useSearchPageStyle = makeStyles({
  surface: {},
  searchField: {
    width: "100%",
    height: "100px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "solid .5px #e7e7e7",
  },
  searchBar: {
    width: "50%",
  },
  resultField: {
    width: "100%",
    height: "calc(100vh - 100px)",
    display: "flex",
  },
  filterBar: {
    height: "100%",
    width: "30%",
    borderRight: "solid .5px #e7e7e7",
  },
  lstResult: {
    height: "100%",
    width: "70%",
  },
});

export default useSearchPageStyle;
