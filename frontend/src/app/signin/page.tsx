"use client"

import { useState } from "react";


export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center relative shadow-lg">
      {/* Background Image */}
      <div className="absolute inset-0 w-[90%] h-[90%] object-cover rounded-xl shadow-lg m-auto bg-gray-100">
        <img
          src="/images/signinPageBg.png"
          alt="Background"
          className="w-full h-full object-cover rounded-xl"
        />

        {/* Signin Form */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full max-w-md p-8 shadow-2xl rounded-2xl ml-4 sm:ml-8 md:ml-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
