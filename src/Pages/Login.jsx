import { useState } from "react";
import { useAuth } from "../context/AuthContext"; 
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../assets/image.png"

const Login = () => {
  const { login, googleLogin } = useAuth();               
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);          
      navigate("/");                         
    } catch (err) {
      setError("Invalid email or password");
      console.error(err.message);
    }
  };


  const handleGoogleLogin = async () => {
  try {
    await googleLogin();
    navigate("/");
  } catch (error) {
    console.error(error);
    setError("Google login failed");
  }
};


  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-blue-300 text-white">
      <div className="bg-blue-500 p-8 rounded-xl w-[380px] shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {error && (
          <p className="text-red-400 mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleLogin}>

          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            className="w-full bg-gray-300 p-3 rounded-lg mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            className="w-full bg-gray-300 p-3 rounded-lg mb-6 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Login
          </button> 

          <button 
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-lg font-semibold mt-4 hover:bg-gray-100 transition">
                   
          <img src={googleImg} alt="Google Logo" className="w-6 h-6" />
          Continue with Google </button>
          
                 
         </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?  
          <Link to="/registration" className="text-purple-800 font-bold"> Registration</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
