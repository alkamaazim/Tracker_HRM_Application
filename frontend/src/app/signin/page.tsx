"use client";

import React, { useState } from "react";
import Button from "@/components/common/buttons/button";
import Inputfield from "@/components/formfields/inputfield";
import DefaultCard from "@/components/common/Card/DefaultCard";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center relative shadow-lg">
      {/* Background Images */}
      <DefaultCard>
        <img
          src="/images/signinPageBg.png"
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-80"
        />

        {/* Sign-in Form */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full max-w-md p-8 shadow-2xl rounded-2xl ml-4 sm:ml-8 md:ml-20 bg-white">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <Inputfield
              type="text"
              name="email"
              value={email}
              id="email"
              isLabel={true}
              labelText="Email*"
              fieldClass="border-gray-300"
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
            <Inputfield
              type="password"
              name="password"
              value={password}
              id="password"
              isLabel={true}
              labelText="Password*"
              fieldClass="border-gray-300"
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
            <Button type="submit" btnText="Sign In" />
          </form>
        </div>
      </DefaultCard>
    </div>
  );
};

export default SignIn;
