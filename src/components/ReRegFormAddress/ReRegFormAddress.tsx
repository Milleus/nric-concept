import React, { FC, ChangeEventHandler, FocusEventHandler } from "react";

import { FormValues } from "../../pages/ReRegFormPage";
import Card from "../../shared-components/Card";
import FormRow from "../../shared-components/FormRow";
import FormCol from "../../shared-components/FormCol";
import FormLabel from "../../shared-components/FormLabel";
import TextInput from "../../shared-components/TextInput";

interface Props {
  formValues: FormValues;
  onChange: ChangeEventHandler;
  onFocus: FocusEventHandler;
  onBlur: FocusEventHandler;
}

const ReRegFormAddress: FC<Props> = ({
  formValues,
  onChange,
  onFocus,
  onBlur
}) => {
  const { postalCode, blockNo, streetName, floorNo, unitNo } = formValues;

  return (
    <Card title="Address">
      <FormRow>
        <FormCol className="sm:w-1/4">
          <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
          <TextInput
            id="postalCode"
            name="postalCode"
            value={postalCode}
            type="number"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>
      </FormRow>

      <FormRow className="flex-wrap">
        <FormCol className="w-1/6 sm:w-1/6">
          <FormLabel htmlFor="blockNo">Block No</FormLabel>
          <TextInput
            id="blockNo"
            name="blockNo"
            value={blockNo}
            type="number"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>

        <FormCol className="w-5/6 sm:w-5/6">
          <FormLabel htmlFor="streetName">Street Name</FormLabel>
          <TextInput
            id="streetName"
            name="streetName"
            value={streetName}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>
      </FormRow>

      <FormRow>
        <FormCol className="sm:w-1/2">
          <FormLabel htmlFor="religion">Religion</FormLabel>
        </FormCol>
      </FormRow>
    </Card>
  );
};

export default ReRegFormAddress;
