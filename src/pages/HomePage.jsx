import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-fuchsia-50">
      <h1 className="text-4xl font-bold text-fuchsia-900 mb-4">
      Welcome to Ducky Notes App!
      </h1>
      <p className="text-lg md:text-xl text-fuchsia-800 mb-6">Organize your thoughts and ideas in one place.</p>
      <div className="space-x-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-fuchsia-800 text-white rounded hover:bg-fuchsia-900 transition"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2 border border-fuchsia-700 text-fuchsia-700 rounded hover:bg-fuchsia-100 transition"
          >
            Sign Up
          </Link>
      </div>
      <Footer  className="fixed bottom-0 left-0"/>
    </div>
  );
};

export default HomePage;
