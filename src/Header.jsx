import { useEffect, useState } from "react";
import React from "react";
import { AdminNavbar, UserNavbar } from "./Navbar";

export function Header({logout}) {
  const [getRole, setRole] = useState("anyone");

  useEffect(() => {
    const role = localStorage.getItem("roles");
    if (role) {
      setRole(role);
    }
  }, []);
  return <> {getRole === "user" && <UserNavbar logout={logout} />}{getRole === "admin" && <AdminNavbar logout={logout}/>}</>;
}
