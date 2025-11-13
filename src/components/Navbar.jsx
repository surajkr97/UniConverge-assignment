import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-6 p-4 bg-sky-100 shadow-md">
      <Link to="/">
        <h1 className="text-xl font-bold cursor-pointer">UniConverge</h1>
      </Link>
      <div className="hidden md:flex space-x-10 cursor-pointer">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-sky-900" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={`/users/${Math.floor(Math.random() * 10) + 1}`}
          className={({ isActive }) =>
            isActive ? "font-bold text-sky-900" : "text-black"
          }
        >
          Random User
        </NavLink>
        <NavLink
          to="/add-user"
          className={({ isActive }) =>
            isActive ? "font-bold text-sky-900" : "text-black"
          }
        >
          Add User
        </NavLink>
      </div>
      <Link to="/add-user">
        <div className="flex gap-6 cursor-pointer">
          <button className="font-bold cursor-pointer">Join Us</button>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
