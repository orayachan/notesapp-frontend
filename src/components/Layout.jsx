import { Outlet, Link } from "react-router-dom";
import Ducky from "/rubber-duck.png";

const Layout = () => {

  return (
    <div className="min-h-screen flex flex-col bg-fuchsia-50 ">
      {/* Navbar */}
      <header className="bg-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-fuchsia-900 hover:text-fuchsia-950 flex items-center-safe gap-4"
          >
            <img src={Ducky} className="w-8" />
            Ducky Notes
          </Link>
          <ul className="flex space-x-6 text-fuchsia-900 font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-yellow-900">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-yellow-900">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>

      {/* Footer (optional) */}
      <footer className="bg-fuchsia-100 text-center text-sm text-fuchsia-900 py-4">
        © {new Date().getFullYear()} Ducky Notes App. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
