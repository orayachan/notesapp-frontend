import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const SignupPage = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const data = await signupUser({ fullName, email, password });
      setUser(data.user); // Save user to AuthContext
      navigate("/dashboard"); // Redirect on success
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-fuchsia-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-fuchsia-900 text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-fuchsia-950"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Full Name"
              className="mt-1 block w-full p-2 border-2 border-fuchsia-100 outline-none  rounded-md focus:ring focus:ring-blue-300"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-fuchsia-950"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="mt-1 block w-full p-2 border-2 border-fuchsia-100 outline-none rounded-md focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-fuchsia-950"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="mt-1 block w-full p-2 border-2 border-fuchsia-100 outline-none rounded-md focus:ring focus:ring-blue-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-fuchsia-950"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="mt-1 block w-full p-2 border-2 border-fuchsia-100 outline-none rounded-md focus:ring focus:ring-blue-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
