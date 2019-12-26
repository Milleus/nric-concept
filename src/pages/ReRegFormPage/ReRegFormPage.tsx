import React, { FC, useState, ChangeEvent } from "react";

import ReRegFormCardName from "../../components/ReRegFormCardName";

export interface FormValues {
  nricNumber: string;
  photoBase64Image: string;
  principalName: string;
  aliasName: string;
  aliasHypyName: string;
  ethnicName: string;
  hypyName: string;
  marriedName: string;
  // contactNumber1: string;
  // contactNumber2: string;
  // country: string;
  // dateOfBirth: string;
  // emailAddress: string;
  // ethnicNameImageBase64: string;
  // gender: Gender;
  // race: Race;
  // religion: string;
  // selectedMaritalStatus: string;
  // language: string;
}

const ReRegFormPage: FC<{}> = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nricNumber: "S6353928G",
    photoBase64Image: "",
    principalName: "TAN AH SENG",
    aliasName: "",
    aliasHypyName: "SENG",
    ethnicName: "",
    hypyName: "",
    marriedName: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="container mx-auto">
      <ReRegFormCardName formValues={formValues} onChange={handleChange} />
      {/* <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
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
        </form> */}
    </div>
  );
};

export default ReRegFormPage;
