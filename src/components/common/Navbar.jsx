import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Ducky from "/rubber-duck.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
      <div className="flex items-center space-x-4">
        <Link
          to={user ? "/dashboard" : "/"}
          className="text-xl font-bold text-fuchsia-900 hover:text-violet-900 flex items-center-safe gap-4"
        >
          <img src={Ducky} className="w-8" />
          Ducky Notes
        </Link>
      </div>

      <div className="flex items-center space-x-4 font-semibold">
        {user ? (
          <>
            <h3>{user.email}</h3>
            <Link
              to="/dashboard"
              className="text-fuchsia-900 hover:text-violet-800 transition"
            >
              Dashboard
            </Link>
            <Link
              to={user && user._id ? `/profile/${user._id}` : "#"}
              className="text-fuchsia-900 hover:text-violet-800 transition"
            >
              Profile
            </Link>
            <button
              onClick={logout} // Call the logout function when clicked
              className="text-stone-500 hover:text-stone-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-fuchsia-900 hover:text-violet-900 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-fuchsia-900 hover:text-violet-900 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
