export function getCars(APIURL, setCars, setError, authenticate, logout, setIsLoggedIn) {
  if (!authenticate()) {
    return Promise.reject(new Error('Not authenticated'));
  } else {
    fetch(`${APIURL}car`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCars(data);
      })
      .catch((error) => {
        if (error.message === 'Not authenticated') {
          logout(setIsLoggedIn);
        } else {
          console.error(error);
          setError('An error occurred');
        }
      });
  }
}
