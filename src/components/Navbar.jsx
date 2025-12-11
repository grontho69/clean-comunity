import React from 'react'
import { Link } from 'react-router'
import { auth } from '../Firebase/firebase.config';

const Navbar = () => {
  const { user, logout } = (auth);
  return (
  <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-xl">CleanCity</Link>
  </div>
  <div className="flex-none gap-2">
    {!user ? (
    <>
      <Link to="/" className="btn btn-ghost">Home</Link>
      <Link to="/all-issues" className="btn btn-ghost">Issues</Link>
      <Link to="/login" className="btn btn-primary">Login</Link>
      <Link to="/register" className="btn btn-secondary">Register</Link>
    </>
    ) : (
    <>
      <Link to="/" className="btn btn-ghost">Home</Link>
      <Link to="/all-issues" className="btn btn-ghost">All Issues</Link>
      <Link to="/add-issue" className="btn btn-ghost">Add Issue</Link>
      <Link to="/my-issues" className="btn btn-ghost">My Issues</Link>
      <Link to="/my-contribution" className="btn btn-ghost">My Contribution</Link>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full bg-gray-400">{user.name[0]}</div>
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><button onClick={logout}>Logout</button></li>
        </ul>
      </div>
    </>
    )}
  </div>
</div>
  )
}

export default Navbar
