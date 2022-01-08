import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/reduxStore";

const PrivateEntry = () => {
  const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);

  return isAuth ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default PrivateEntry;
