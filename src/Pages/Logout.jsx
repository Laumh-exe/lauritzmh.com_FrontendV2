import React, { useEffect } from "react";

export function Logout({logout}) {
  useEffect(() => {
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }, []);

  return (
    <>
      <h1>Logout</h1>
      <p>You have been logged out</p>
    </>
  );
}