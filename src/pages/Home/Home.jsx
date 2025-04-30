import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-fuchsia-50 px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-fuchsia-900 mb-4">
          Welcome to NotesApp
        </h1>
        <p className="text-lg md:text-xl text-fuchsia-800 mb-6">
          Organize your thoughts and ideas in one place.
        </p>
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
      </div>
    </section>
  );
};
export default Home;
