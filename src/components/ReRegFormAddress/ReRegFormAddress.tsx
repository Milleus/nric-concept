import React, { FC, ChangeEventHandler, FocusEventHandler } from "react";

import { FormValues } from "../../pages/ReRegFormPage";
import Card from "../../shared-components/Card";
import FormCol from "../../shared-components/FormCol";
import FormLabel from "../../shared-components/FormLabel";
import FormRow from "../../shared-components/FormRow";
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
    <Card id="flipAnchor" title="Address">
      <FormRow>
        <FormCol className="sm:w-1/4">
          <FormLabel htmlFor="postalCode">Postal code</FormLabel>
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
        <FormCol className="sm:w-1/4">
          <FormLabel htmlFor="blockNo">Block number</FormLabel>
          <TextInput
            id="blockNo"
            name="blockNo"
            value={blockNo}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>

        <FormCol className="sm:w-2/4">
          <FormLabel htmlFor="streetName">Street name</FormLabel>
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
        <FormCol className="sm:w-1/4">
          <FormLabel htmlFor="floorNo">Floor number</FormLabel>
          <TextInput
            id="floorNo"
            name="floorNo"
            value={floorNo}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>

        <FormCol className="sm:w-1/4">
          <FormLabel htmlFor="unitNo">Unit number</FormLabel>
          <TextInput
            id="unitNo"
            name="unitNo"
            value={unitNo}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>
      </FormRow>
    </Card>
  );
};

ReRegFormAddress.displayName = "ReRegFormAddress";

export default ReRegFormAddress;
