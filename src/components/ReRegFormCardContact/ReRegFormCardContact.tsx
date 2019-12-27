import React, { FC, ChangeEventHandler } from "react";

import Card from "../../shared-components/Card";
import FormLabel from "../../shared-components/FormLabel";
import TextInput from "../../shared-components/TextInput";
import { FormValues } from "../../pages/ReRegFormPage/ReRegFormPage";

interface Props {
  formValues: FormValues;
  onChange: ChangeEventHandler;
}

const ReRegFormCardContact: FC<Props> = ({ formValues, onChange }) => {
  const { emailAddress, contactNumber1, contactNumber2 } = formValues;

  return (
    <Card
      title="Contact Details"
      description="We'll contact you via the email and number here for any application matters."
    >
      <div className="flex -mx-2">
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-6">
          <FormLabel htmlFor="emailAddress">Email</FormLabel>
          <TextInput
            id="emailAddress"
            name="emailAddress"
            value={emailAddress}
            type="email"
            onChange={onChange}
          />
        </div>
      </div>

      <div className="flex -mx-2">
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-6">
          <FormLabel htmlFor="contactNumber1">Mobile number</FormLabel>
          <TextInput
            id="contactNumber1"
            name="contactNumber1"
            value={contactNumber1}
            onChange={onChange}
          />
        </div>

        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-6">
          <FormLabel htmlFor="contactNumber2" isOptional={true}>
            Alternate contact number
          </FormLabel>
          <TextInput
            id="contactNumber2"
            name="contactNumber2"
            value={contactNumber2}
            onChange={onChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default ReRegFormCardContact;
