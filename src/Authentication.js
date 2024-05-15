function login(password, username, setIsAuthenticated, APIURL, setError) {

  if (localStorage.getItem("token")) {
    localStorage.clear();
  }
  const tempUser = { username, password };
  fetch(`${APIURL}auth/login`, {
    method: "POST",
    body: JSON.stringify(tempUser),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((user) => {
      localStorage.setItem("token", user.token);
      localStorage.setItem("roles", user.role);
      localStorage.setItem("userName", user.userName);
      setIsAuthenticated(true);
    })
    .catch((error) => {
      console.log(error);
      setError("Invalid username or password");
    });
}

function logout() {
  localStorage.removeItem("token");
  localStorage.clear();
  setIsAuthenticated(false);
}

function register() {
  // register logic
}

export { login, logout, register };
