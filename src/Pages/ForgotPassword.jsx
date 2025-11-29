
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromLogin = location.state?.email || "";
  const [email, setEmail] = useState(emailFromLogin);


  const handleReset = (e) => {
    e.preventDefault();
    
    window.location.href = "https://mail.google.com/";
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-purple-600 text-white">
      <div className="bg-purple-500 p-8 rounded-xl w-[380px] shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Forgot Password</h1>

        <form onSubmit={handleReset}>
          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            className="w-full bg-gray-300 text-black p-3 rounded-lg mb-6 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />


          <button
            type="submit"
            className="w-full bg-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center mt-4 text-sm cursor-pointer" onClick={() => navigate("/")}>
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
