import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props: any) {
  const { user } = useContext<any>(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/home");
  }

  if (!user.isSupplier && props.shouldBeSupplier) {
    navigate("/suppiler/login");
  }

  return props.children;
}

export default ProtectedRoute;
