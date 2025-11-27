import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.jpg"


const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="w-full bg-gray-200 text-gray-500 shadow-lg ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">

        
        <Link to="/" className="text-2xl font-bold tracking-wide text-purple-400">
          <img src={logo} className={` h-16 w-auto rounded-xl`} alt="" />
        </Link>

        
        <div className="hidden md:flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-400 font-semibold"
                : "hover:text-purple-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/games"
            className={({ isActive }) =>
              isActive
                ? "text-purple-400 font-semibold"
                : "hover:text-purple-300"
            }
          >
            Games
          </NavLink>

          
          {!user && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "hover:text-purple-300"
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/registration"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-400 font-semibold"
                    : "hover:text-purple-300"
                }
              >
                Registration
              </NavLink>
            </>
          )}

          
          {user && (
            <>
              
              <img
                onClick={() => navigate("/my-profile")}
                src={
                  user.photoURL ||
                  "https://i.ibb.co/Yf0t5DQ/default-profile.jpg"
                }
                alt="profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-purple-400 cursor-pointer hover:scale-105 transition"
                title={user.displayName}
              />

              
              <button
                onClick={handleLogout}
                className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition shadow-md"
              >
                Logout
              </button>
            </>
          )}
        </div>

        
        <div className="md:hidden">
          <Link to="/menu" className="text-purple-300 text-xl">☰</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
