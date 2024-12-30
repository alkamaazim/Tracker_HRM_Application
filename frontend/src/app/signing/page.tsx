"use client";

import { useState } from "react";
import Button from "@/components/common/buttons/button";
import Inputfield from "@/components/formfields/inputfield";

type Props = {};

const SignIn = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center relative shadow-lg">
      {/* <--- Background Image ---> */}
      <div className="absolute inset-0 w-[90%] h-[90%] object-cover rounded-xl shadow-lg m-auto bg-gray-100">
        <img
          src="/images/signinPageBg.png"
          alt="Background"
          className="w-full h-full object-cover rounded-xl"
        />

        {/* <--- Signin Form ---> */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full max-w-md p-8 shadow-2xl rounded-2xl ml-4 sm:ml-8 md:ml-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
          <form onSubmit={handleSubmit}>
            {/* <--- Email Input Field  ---> */}
            <div className="mb-4">
              <Inputfield
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="true"
                isLabel={true}
                labelText="Email"
              />
            </div>
            {/* <--- Password Input Field ---> */}
            <div className="mb-4">
              <Inputfield
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required="true"
                isLabel={true}
                labelText="Password"
              />
            </div>
            <Button type="submit" btnText="Sign In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
