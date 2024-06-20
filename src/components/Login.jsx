import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; // Import the icons
import { Illustration } from '../assets/vectors'; // Ensure the path to Illustration is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication logic
    if (email === 'admin@example.com' && password === 'password') {
      // Redirect to the dashboard
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-center mb-6">
          {/* <img src="/logo.png" alt="Logo" className="mx-auto mb-4" /> Adjust the logo path */}
          <h1 className="text-4xl font-bold">SuperAdmin - Tenant Management</h1>
          {/* <p className="text-gray-700 mt-2">Welcome back!</p> */}
          {/* <p className="text-gray-500">User Experience & Interface Design<br/>Strategy SaaS Solutions</p> */}
        </div>
        <img src={Illustration} alt="Illustration" className="w-3/4" />
      </div>
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <div className="w-3/4 max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign in your account</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="demo@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                  id="password"
                  type={showPassword ? 'text' : 'password'} // Toggle input type based on state
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                >
                  {showPassword ? <EyeOff color='rgba(111, 111, 111, 1)' size={"1.5em"} /> : <Eye color='rgba(111, 111, 111, 1)' size={"1.5em"} />}
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" />
                <span className="ml-2 text-gray-700">Remember my preference</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Sign In
              </button>
            </div>
            <div className="text-center mt-4">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/signup"
              >
                Don’t have an account? Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
