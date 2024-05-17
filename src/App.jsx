import { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "./Pages/Login";
import { login, logout, authenticate } from "./Authentication";
import { Home } from "./Pages/Home";
import { Cars } from "./Pages/Cars";
import { About } from "./Pages/About";
import { Register } from "./Pages/Register";
import { Header } from "./Header";
import { Logout } from "./Pages/Logout";
import { getCars } from "./apiCalls";
import { AddCar } from "./Pages/AddCar";

function App() {
  //const APIURL = "http://localhost:7070/api/"; //For local api testing
  const APIURL = "https://api.lauritzmh.com/api/"; //For deployment
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticate()) {
      setIsLoggedIn(true);
    }
  }),
    [];

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        <Route
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Header logout={logout} setIsLoggedIn={setIsLoggedIn} />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route
            path="/cars"
            element={
              <Cars
                getCars={getCars}
                APIURL={APIURL}
                setError={setError}
                logout={logout}
                authenticate={authenticate}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addCar" element={<AddCar />} />
        </Route>
        <Route
          path="/login"
          element={
            <Login
              login={login}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              APIURL={APIURL}
              setError={setError}
              error={error}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
