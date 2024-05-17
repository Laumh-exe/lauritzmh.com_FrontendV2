import { jwtDecode } from "jwt-decode";

function login(password, username, setIsLoggedIn, APIURL, setError) {
  
  if (localStorage.getItem("token")) {
    localStorage.clear();
  }
  const tempUser = { username, password };
  fetch(`${APIURL}auth/login`, {
    method: "POST",
    body: JSON.stringify(tempUser),
    headers: { "Content-Type": "application/json" },
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP status ' + response.status);
    }
    return response.json();
  })
  .then((user) => {
    const decoded = jwtDecode(user.token);
    localStorage.setItem("token", user.token);
    localStorage.setItem("exp", decoded.exp);
    const role = decoded.roles.replace(/,/g, "");
    localStorage.setItem("roles", role);
    localStorage.setItem("userName", decoded.username);
    setIsLoggedIn(true);
  })
  .catch((error) => {
    setError("Invalid username or password");
    console.error("Error:", error);
  });
}

function logout(setIsLoggedIn) {  
  localStorage.removeItem("token");
  localStorage.clear();
  setIsLoggedIn(false);
}

function register() {
  // register logic
}

function authenticate() {
  const tokenExpireTime = localStorage.getItem("exp");
  if (tokenExpireTime) {
    if (tokenExpireTime * 1000 < Date.now()) {
      localStorage.clear();
      return false;
    }
    return true;
  }
  return false;
}

export { login, logout, register, authenticate };
