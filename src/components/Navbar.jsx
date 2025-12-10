import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <nav className="bg-[#7b1e3c] shadow px-8 py-4 flex justify-between items-center text-[#f6d78b]">
      <h1 className="text-2xl font-bold text-[#ffcc33]">Learnings</h1>

      <div className="flex gap-6 text-lg items-center">
        <Link to="/" className="hover:text-[#ffcc33]">Home</Link>
        <Link to="/courses" className="hover:text-[#ffcc33]">Courses</Link>
        <Link to="/dashboard" className="hover:text-[#ffcc33]">Dashboard</Link>

        {/* If user is logged in */}
        {user ? (
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2">
              {/* User icon */}
              <div className="w-8 h-8 bg-white text-[#7b1e3c] rounded-full flex justify-center items-center font-bold">
                {user.username[0].toUpperCase()}
              </div>
              <span className="font-medium">{user.username}</span>
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 mt-3 w-44 bg-white text-black rounded shadow-lg hidden group-hover:block">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>

              <Link to="/enrolled-courses" className="block px-4 py-2 hover:bg-gray-100">
                Enrolled Courses
              </Link>

              <Link to="/account" className="block px-4 py-2 hover:bg-gray-100">
                Account Settings
              </Link>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <Link to="/login" className="hover:text-[#ffcc33]">Login</Link>
            <Link to="/signup" className="hover:text-[#ffcc33]">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}