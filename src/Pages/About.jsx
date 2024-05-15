import styled from "styled-components";
import { useEffect } from "react";

export function About() {
  const test = "test";
  useEffect(() => {
    console.log("test");
  }, []);
  
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
    </>
  );
}
