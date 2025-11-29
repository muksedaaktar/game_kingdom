import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import googleImg from "../assets/image.png"; 

const Registration = () => {
  const { register, updateUserProfile, googleLogin } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    if (pwd.length < 6) return "Password must be at least 6 characters";
    if (!/[A-Z]/.test(pwd)) return "Password must contain at least one uppercase letter";
    if (!/[a-z]/.test(pwd)) return "Password must contain at least one lowercase letter";
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const pwdError = validatePassword(password);
    if (pwdError) return setError(pwdError);

    try {
       const userCredential = await register(email, password);

      if (name || photoURL) {
        await updateUserProfile({ displayName: name, photoURL });
      }

      navigate("/");
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Google login failed");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-purple-600 text-white">
      <div className="bg-blue-500 p-8 rounded-xl w-[380px] shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Registration</h1>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form onSubmit={handleRegister}>
          <label className="block mb-2 text-sm">Name</label>
          <input
            type="text"
            className="w-full bg-gray-300 text-black p-3 rounded-lg mb-4 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm">Email</label>
          <input
            type="email"
            className="w-full bg-gray-300 text-black p-3 rounded-lg mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block mb-2 text-sm">Photo URL</label>
          <input
            type="text"
            className="w-full bg-gray-300 text-black p-3 rounded-lg mb-4 outline-none"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />

          <label className="block mb-2 text-sm">Password</label>
          <input
            type="password"
            className="w-full bg-gray-300 text-black p-3 rounded-lg mb-6 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Registration Now
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-lg font-semibold mt-4 hover:bg-gray-100 transition"
          >
            <img src={googleImg} alt="Google Logo" className="w-6 h-6" />
            Continue with Google
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-800 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
