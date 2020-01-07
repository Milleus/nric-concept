import React, { FC, useState, ChangeEvent } from "react";

import GridContainer from "../../shared-components/GridContainer";
import IdentityCardPreview from "../../components/IdentityCardPreview";
import PageFooter from "../../components/PageFooter/PageFooter";
import PageHeader from "../../components/PageHeader";
import PageTitle from "../../components/PageTitle";
import ReRegFormAddress from "../../components/ReRegFormAddress";
import ReRegFormContact from "../../components/ReRegFormContact";
import ReRegFormName from "../../components/ReRegFormName";
import ReRegFormOther from "../../components/ReRegFormOther";
import ReRegFormPhoto from "../../components/ReRegFormPhoto";

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
  // photo section
  photoBase64Image: string;
  // name section
  principalName: string;
  aliasName: string;
  aliasHypyName: string;
  ethnicName: string;
  hypyName: string;
  marriedName: string;
  // other particulars section
  race: Race;
  dateOfBirth: string;
  gender: Gender;
  countryOfBirth: Country;
  religion: string;
  // address section
  postalCode: string;
  blockNo: string;
  streetName: string;
  floorNo: string;
  unitNo: string;
  // contact details section
  emailAddress: string;
  contactNumber1: string;
  contactNumber2: string;
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
    // photo section
    photoBase64Image: "",
    // name section
    principalName: "NG PEK KOK",
    aliasName: "KEXIA",
    aliasHypyName: "",
    ethnicName: "陈啊盛",
    hypyName: "",
    marriedName: "LIM PEK KOK",
    // other particulars section
    race: Race.CHINESE,
    dateOfBirth: "12-12-1912",
    gender: Gender.FEMALE,
    countryOfBirth: Country.SINGAPORE,
    religion: "",
    // address section
    postalCode: "444444",
    blockNo: "4",
    streetName: "FAKE AVENUE 4",
    floorNo: "04",
    unitNo: "04",
    // contact details section
    emailAddress: "",
    contactNumber1: "",
    contactNumber2: ""
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
      case "postalCode":
      case "blockNo":
      case "streetName":
      case "floorNo":
      case "unitNo":
        setActiveField(ActiveField.ADDRESS);
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
            <ReRegFormPhoto
              formValues={formValues}
              onUploadChange={handleUploadChange}
            />

            <ReRegFormName
              formValues={formValues}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <ReRegFormOther
              formValues={formValues}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              religionOptions={religionOptions}
            />

            <ReRegFormAddress
              formValues={formValues}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <ReRegFormContact
              formValues={formValues}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <div className="hidden w-auto lg:block px-4">
            <IdentityCardPreview
              formValues={formValues}
              activeField={activeField}
            />
          </div>
        </div>
        {/* <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8"></form> */}
      </GridContainer>

      <PageFooter />
    </>
  );
};

export default ReRegFormPage;
