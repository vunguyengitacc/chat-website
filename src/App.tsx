import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { AppDispatch } from "./app/reduxStore";
import { getMe } from "./feature/auth/authSlice";
import MasterRoute from "./route";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const [isTryLoad, setIsTryLoad] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getMe()).then(() => setIsTryLoad(true));
  }, []);

  return isTryLoad ? <MasterRoute /> : <></>;
}

export default App;
