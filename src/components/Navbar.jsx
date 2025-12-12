import { NavLink, Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

import { toast } from "react-toastify";
import MyContainer from "./MyContainer";

const Navbar = () => {
  const { user, signoutUserFunc, setUser,  } = useContext(AuthContext);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout Successful");
        setUser(null);
      })
      .catch((e) => toast.error(e.message));
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-purple-600 font-semibold"
      : "text-gray-700 hover:text-purple-600";

  return (
    
       <div className="bg-white border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-2">
          <img src={0} className="w-[50px]" />
          <span className="text-xl font-bold">Clean Community</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6">

          {/* PUBLIC ROUTES */}
          <li>
            <NavLink to={"/"} className={navLinkStyle}>Home</NavLink>
          </li>

          <li>
            <NavLink to={"/issues"} className={navLinkStyle}>Issues</NavLink>
          </li>

          {/* PRIVATE ROUTES */}
          {user && (
            <>
              <li>
                <NavLink to={"/all-issues"} className={navLinkStyle}>All Issues</NavLink>
              </li>

              <li>
                <NavLink to={"/add-issue"} className={navLinkStyle}>Add Issue</NavLink>
              </li>

              <li>
                <NavLink to={"/my-issues"} className={navLinkStyle}>My Issues</NavLink>
              </li>

              <li>
                <NavLink to={"/my-contribution"} className={navLinkStyle}>My Contribution</NavLink>
              </li>
            </>
          )}

          {/* LOGIN / REGISTER */}
          {!user && (
            <>
              <li>
                <NavLink to={"/login"} className={navLinkStyle}>Login</NavLink>
              </li>

              <li>
                <NavLink to={"/register"} className={navLinkStyle}>Register</NavLink>
              </li>
            </>
          )}
        </ul>

        {/* RIGHT SIDE (NO LOADER NOW) */}
        {user ? (
          // Avatar Dropdown
          <div className="relative group cursor-pointer">
            <img
              src={user?.photoURL || "https://via.placeholder.com/80"}
              className="w-[42px] h-[42px] rounded-full"
            />

            {/* Dropdown */}
            <div className="absolute right-0 top-12 hidden group-hover:block bg-white shadow-md rounded-md w-48 p-4">
              <p className="font-semibold">{user.displayName}</p>
              <p className="text-gray-600 text-sm mb-2">{user.email}</p>

              <button
                onClick={handleSignout}
                className="w-full bg-purple-600 text-white py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
   
  );
};

export default Navbar;
