import { useNavigate } from "react-router-dom";

export function AddCar() {
  const navigate = useNavigate();

  return (
    <>
    {localStorage.getItem("roles")!= "admin" && 
      navigate("/login")}
      <h1>Add cars</h1>
    </>
  );
}
