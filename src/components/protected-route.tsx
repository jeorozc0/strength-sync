import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Layout from "./layout";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  console.log(user);
  return children ? children : <Layout /> ;;
};

export default ProtectedRoute;
