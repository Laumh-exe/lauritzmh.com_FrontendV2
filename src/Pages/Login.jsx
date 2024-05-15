import React, { useState, useEffect } from "react";

export function Login({
  login,
  isAuthenticated,
  setIsAuthenticated,
  APIURL,
  setError,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function submit(event) {
    console.log("submitting: ", username, " ", password);
    event.preventDefault();
    login(username, password, setIsAuthenticated, APIURL, setError);
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          username:
          <input
            type="username"
            name="username"
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
          />
        </label>
        <button
          onClick={(e) => {
            submit(e);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
