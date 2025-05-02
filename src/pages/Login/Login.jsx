import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login success:", data);

      // ✅ Navigate to another page after successful login
      navigate("/dashboard"); // เปลี่ยนเส้นทางตามต้องการ
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-fuchsia-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-fuchsia-900 mb-6 text-center">
          Login to NotesApp
        </h2>

        {errorMsg && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-fuchsia-900 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-fuchsia-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-fuchsia-900 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-fuchsia-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-fuchsia-800 text-white font-semibold py-2 px-4 rounded hover:bg-fuchsia-900 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-fuchsia-900 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-fuchsia-700 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
