import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children, isAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated) {
      return navigate("/login" );
    }
  }, [isAuthenticated]);

  return children;
}
