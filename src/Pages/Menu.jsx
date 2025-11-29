import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <div className="w-full h-[350px] bg-purple-600 text-white p-6">

      
      <button
        onClick={() => navigate(-1)}
        className="text-2xl mb-6 hover:text-purple-300"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-8">Menu</h2>

      <div className="space-y-6 text-lg">

        <NavLink
          to="/"
          className="block hover:text-purple-300"
        >
          Home
        </NavLink>

        {!user && (
          <>
            <NavLink
              to="/login"
              className="block hover:text-purple-300"
            >
              Login
            </NavLink>

            <NavLink
              to="/registration"
              className="block hover:text-purple-300"
            >
              Registration
            </NavLink>
          </>
        )}

        {user && (
          <>
            <NavLink
              to="/my-profile"
              className="block hover:text-purple-300"
            >
              My Profile
            </NavLink>

            <button
              onClick={handleLogout}
              className="text-red-300 font-semibold"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
