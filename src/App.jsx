import { useEffect, useState } from "react";
import { useNavigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "./Pages/Login";
import { login , logout} from "./Authentication";
import { Home } from "./Pages/Home";
import { Cars } from "./Pages/Cars";
import { About } from "./Pages/About";
import { Register } from "./Pages/Register";
import { Header } from "./Header";
import { Logout } from "./Pages/Logout";
import { getCars } from "./apiCalls";
import { AddCar } from "./Pages/AddCar";

function App() {
  const APIURL = "http://localhost:7070/api/";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("checking for token: " + localStorage.getItem("token")  );
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
    }
  }),
    [];

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Routes>
        <Route
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Header logout={logout}/>
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars getCars={getCars} APIURL={APIURL} setError={setError}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/addCar" element={<AddCar/>} />
        </Route>
        <Route
          path="/login"
          element={
            <Login
              login={login}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              APIURL={APIURL}
              setError={setError}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
