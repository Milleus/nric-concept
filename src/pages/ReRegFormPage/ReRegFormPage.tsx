import React, { FC, useState, ChangeEvent } from "react";

import GridContainer from "../../shared-components/GridContainer";
import IdentityCard from "../../components/IdentityCard";
import PageFooter from "../../components/PageFooter/PageFooter";
import PageHeader from "../../components/PageHeader";
import PageTitle from "../../components/PageTitle";
import ReRegFormCardContact from "../../components/ReRegFormCardContact";
import ReRegFormCardName from "../../components/ReRegFormCardName";
import ReRegFormCardOther from "../../components/ReRegFormCardOther";
import ReRegFormCardPhoto from "../../components/ReRegFormCardPhoto";

export enum Gender {
  UNKNOWN = "U",
  MALE = "M",
  FEMALE = "F"
}

export enum Race {
  UNKNOWN = "UNKNOWN",
  CHINESE = "CHINESE",
  MALAY = "MALAY",
  INDIAN = "INDIAN"
}

export enum Country {
  SINGAPORE = "SINGAPORE",
  MALAYSIA = "MALAYSIA"
}

export enum ActiveField {
  NONE = "NONE",
  PHOTO = "PHOTO",
  NAME = "NAME",
  ADDRESS = "ADDRESS"
}

export interface FormValues {
  nricNumber: string;
  photoBase64Image: string;
  principalName: string;
  aliasName: string;
  aliasHypyName: string;
  ethnicName: string;
  hypyName: string;
  marriedName: string;
  gender: Gender;
  race: Race;
  religion: string;
  emailAddress: string;
  contactNumber1: string;
  contactNumber2: string;
  dateOfBirth: string;
  countryOfBirth: Country;
  // ethnicNameImageBase64: string;
  // selectedMaritalStatus: string;
  // language: string;
  // block?: string;
  // street?: string;
  // floor?: string;
  // unit?: string;
  // buildingName?: string;
  // country?: string;
  // postalCode?: string;
  address: string;
}

const religionOptions = [
  { label: "Buddism", value: "B" },
  { label: "Christianity", value: "C" },
  { label: "No Religion", value: "N" },
  { label: "Hinduism", value: "H" },
  { label: "Islam", value: "I" },
  { label: "Others", value: "O" },
  { label: "Sikhism", value: "S" },
  { label: "Taoism", value: "T" },
  { label: "Unknown", value: "U" }
];

const ReRegFormPage: FC<{}> = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nricNumber: "S****147A",
    photoBase64Image: "",
    principalName: "NG PEK KOK",
    aliasName: "KEXIA",
    aliasHypyName: "",
    ethnicName: "陈啊盛",
    hypyName: "",
    marriedName: "LIM PEK KOK",
    gender: Gender.FEMALE,
    race: Race.CHINESE,
    religion: "",
    emailAddress: "",
    contactNumber1: "",
    contactNumber2: "",
    dateOfBirth: "12-12-1912",
    countryOfBirth: Country.SINGAPORE,
    address: "4 FAKE AVENUE 4 #04-04 SINGAPORE 444444"
  });
  const [activeField, setActiveField] = useState<ActiveField>(ActiveField.NONE);

  const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files[0]) {
      const file = files[0];
      const { name, type } = file;

      if (
        name.split(".").length !== 2 ||
        (type !== "image/jpg" && type !== "image/jpeg" && type !== "image/png")
      ) {
        console.log("TODO: add error display");
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onloadend = () => {
        setFormValues({
          ...formValues,
          photoBase64Image: fileReader.result as string
        });
        setActiveField(ActiveField.PHOTO);
      };
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value.toUpperCase() });
  };

  const handleFocus = (event: any) => {
    const { name } = event.target;

    switch (name) {
      case "principalName":
      case "ethnicName":
      case "marriedName":
      case "aliasName":
        setActiveField(ActiveField.NAME);
        break;
      default:
        setActiveField(ActiveField.NONE);
    }
  };

  const handleBlur = () => {
    setActiveField(ActiveField.NONE);
  };

  const { nricNumber } = formValues;

  return (
    <>
      <PageHeader />

      <GridContainer>
        <PageTitle
          title="Update IC information"
          subtitle={`Re-register IC No. ${nricNumber}`}
        />

        <div className="flex -mx-4">
          <div className="w-full px-4">
            <ReRegFormCardPhoto
              formValues={formValues}
              onUploadChange={handleUploadChange}
            />

            <ReRegFormCardName
              formValues={formValues}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <ReRegFormCardOther
              formValues={formValues}
              onChange={handleChange}
              religionOptions={religionOptions}
            />

            <ReRegFormCardContact
              formValues={formValues}
              onChange={handleChange}
            />
          </div>

          <div className="hidden w-auto lg:block px-4">
            <IdentityCard formValues={formValues} activeField={activeField} />
          </div>
        </div>
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
      </GridContainer>

      <PageFooter />
    </>
  );
};

export default ReRegFormPage;
