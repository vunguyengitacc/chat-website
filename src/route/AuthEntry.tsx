import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/reduxStore";

const AuthEntry = () => {
  const isAuth = useSelector((state: RootState) => state.authReducer.isAuth);

  return !isAuth ? <Outlet /> : <Navigate to="/app" />;
};

export default AuthEntry;
