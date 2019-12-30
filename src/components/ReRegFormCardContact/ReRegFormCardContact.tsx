import React, { FC, ChangeEventHandler } from "react";

import { FormValues } from "../../pages/ReRegFormPage";
import Card from "../../shared-components/Card";
import FormCol from "../../shared-components/FormCol";
import FormLabel from "../../shared-components/FormLabel";
import FormRow from "../../shared-components/FormRow";
import TextInput from "../../shared-components/TextInput";

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
      <FormRow>
        <FormCol className="sm:w-1/2">
          <FormLabel htmlFor="emailAddress">Email</FormLabel>
          <TextInput
            id="emailAddress"
            name="emailAddress"
            value={emailAddress}
            type="email"
            onChange={onChange}
          />
        </FormCol>
      </FormRow>

      <FormRow className="flex-wrap">
        <FormCol className="sm:w-1/2">
          <FormLabel htmlFor="contactNumber1">Mobile number</FormLabel>
          <TextInput
            id="contactNumber1"
            name="contactNumber1"
            value={contactNumber1}
            placeholder="Please indicate"
            onChange={onChange}
          />
        </FormCol>

        <FormCol className="sm:w-1/2">
          <FormLabel htmlFor="contactNumber2" isOptional={true}>
            Alternate contact number
          </FormLabel>
          <TextInput
            id="contactNumber2"
            name="contactNumber2"
            value={contactNumber2}
            placeholder="Please indicate"
            onChange={onChange}
          />
        </FormCol>
      </FormRow>
    </Card>
  );
};

export default ReRegFormCardContact;
