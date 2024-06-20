import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    // For example: localStorage.removeItem('authToken');
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">SuperAdmin Tenant Management</h1>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
