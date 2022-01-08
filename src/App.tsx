import Loading from "component/Loading";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
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

  return (
    <>
      {isTryLoad ? <MasterRoute /> : <Loading />}
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  );
}

export default App;
