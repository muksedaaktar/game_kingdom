import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-purple-600 flex justify-center items-center text-white">
      <div className="bg-purple-500 p-8 rounded-xl w-[380px] shadow-lg text-center">

        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        
        <img
          src={user?.photoURL || "https://ibb.co.com/v4ZQHN4C"}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white object-cover"
          alt="Profile"
        />

        <p className="text-lg"><strong>Name:</strong> {user?.displayName || "No Name"}</p>
        <p className="text-lg"><strong>Email:</strong> {user?.email}</p>

       
        <button
          onClick={() => navigate("/update-profile")}
          className="w-full mt-6 bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Update Information
        </button>

      </div>
    </div>
  );
};

export default MyProfile;
