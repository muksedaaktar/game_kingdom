import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      setSuccess("Profile updated successfully!");
      setTimeout(() => navigate("/my-profile"), 1500);

    } catch (err) {
      setError("Failed to update profile.");
      console.error(err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-purple-600 flex justify-center items-center text-white">
      <div className="bg-purple-500 p-8 rounded-xl w-[380px] shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>

        {success && <p className="text-green-300 text-center mb-3">{success}</p>}
        {error && <p className="text-red-300 text-center mb-3">{error}</p>}

        <form onSubmit={handleUpdate}>

          <label className="block mb-2 text-sm">Name</label>
          <input
            type="text"
            className="w-full bg-gray-300 text-black p-3 rounded-lg mb-4 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm">Photo URL</label>
          <input
            type="text"
            className="w-full bg-gray-300 text-black p-3 rounded-lg mb-6 outline-none"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Update Information
          </button>
        </form>

      </div>
    </div>
  );
};

export default UpdateProfile;
