import React, { FC, useState, ChangeEvent } from "react";

import TextInput from "../../shared-components/TextInput";
import Label from "../../shared-components/Label";

const ReRegFormPage: FC<{}> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <div className="w-full max-w-md bg-gray-800">
        <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <Label htmlFor="email">EMAIL ADDRESS</Label>
            <TextInput
              id="email"
              name="email"
              value={email}
              type="email"
              placeholder="Johnbull@example.com"
              onChange={handleEmailChange}
            />
          </div>
          <div className="px-4 pb-4">
            <Label htmlFor="password">PASSWORD</Label>
            <TextInput
              id="password"
              name="password"
              value={password}
              type="password"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReRegFormPage;
