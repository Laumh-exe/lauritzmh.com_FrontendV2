import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCars = styled.table`
margin: 0 auto;
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  border-collapse: collapse;
  width: 80%;
  border: 3px solid black;
  text-align: left;
  font-family: "Roboto", sans-serif;
  table-layout: fixed;
  th,
  td {
    padding: 15px;
    text-align: left;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: grey;
  }

  th {
    background-color: black;
    color: white;
  }
`;

export function Cars({ getCars, APIURL, setError, logout, authenticate, setIsLoggedIn}) {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    getCars(APIURL, setCars, setError, authenticate, logout, setIsLoggedIn);
  }, [getCars, APIURL, setError]);

  return (
    <>
      <h1>Cars</h1>
      <div>
        {!cars ? (
          <p>no cars currently</p>
        ) : (
          <StyledCars>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Make</th>
                <th>Year</th>
                <th>First Registration Date</th>
                <th>Price</th>
              </tr>
            </thead>
            {cars.map((car, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.make}</td>
                    <td>{car.year}</td>
                    <td>{car.firstRegistrationDate}</td>
                    <td>{car.price}</td>
                  </tr>
                </tbody>
              );
            })}
          </StyledCars>
        )}
      </div>
    </>
  );
}
