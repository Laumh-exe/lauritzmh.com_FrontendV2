export function getCars( APIURL, setCars, setError) {
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
    }).catch((error) => {
      console.log(error);
      setError("Could not fetch cars");
    });
}
