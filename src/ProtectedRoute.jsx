import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children, isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn) {
      return navigate("/login" );
    }
  }, [isLoggedIn]);

  return children;
}
