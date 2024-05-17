import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { logout } from "./Authentication";

export const StyledNavbar = styled.nav`
  box-sizing: border-box;

  width: 100%;
  background-color: #292929;
  color: white;
  gap: 2rem;
  padding: 0 1rem;

  margin: 0;
  font-family: sans-serif;

  .site-title {
    font-size: 2em;
    font-weight: bold;
    &:hover {
      color: #0091a7;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  li {
    font-size: 1.5rem;
    &:hover {
      color: #0091a7;
    }
  }
`;

export const StyledBasic = styled.div`
  text-align: center;
  width: 70%;
  background-color: #ffbebe;
  color: #000000;
  gap: 2rem;
  padding: 0 1rem;
`;

export const StyledRight = styled.div`
  flex: 15%;
  display: flex;
  align-items: center;
  padding-right: 50px;
`;

export const StyledLeft = styled.div`
  height: 100%;
  flex: 85%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export function AdminNavbar({logout, setIsLoggedIn}) {
  return (
    <>
    <StyledNavbar>
      <nav>
        <ul>
          <StyledLeft>
            <Link to="/" className="site-title">
              LAURITZMH.COM
            </Link>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>           
             <li>
              <Link to="/addcar">Add Car</Link>
            </li>
          </StyledLeft>
          <StyledRight>
            <li>
              <Link to="/logout"><span onClick={() => logout(setIsLoggedIn)}>Logout</span></Link>
            </li>
          </StyledRight>
        </ul>
        
      </nav>
      </StyledNavbar>
      <Outlet />
    </>
  );
}
export function UserNavbar({logout, setIsLoggedIn}) {
  return (
    <>
    <StyledNavbar>
      <nav>
        <ul>
          <StyledLeft>
            <Link to="/" className="site-title">
              LAURITZMH.COM
            </Link>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </StyledLeft>
          <StyledRight>
            <li>
              <Link to="/logout"><span onClick={() => logout(setIsLoggedIn)}>Logout</span></Link>
            </li>
          </StyledRight>
        </ul>
        
      </nav>
      </StyledNavbar>
      <Outlet />
    </>
  );
}
