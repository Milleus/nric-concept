import React, { FC, ChangeEventHandler, FocusEventHandler } from "react";

import { FormValues } from "../../pages/ReRegFormPage";
import Card from "../../shared-components/Card";
import FormAttribute from "../../shared-components/FormAttribute";
import FormCol from "../../shared-components/FormCol";
import FormLabel from "../../shared-components/FormLabel";
import FormRow from "../../shared-components/FormRow";
import Select, { SelectOption } from "../../shared-components/Select/Select";

interface Props {
  formValues: FormValues;
  onChange: ChangeEventHandler;
  onFocus: FocusEventHandler;
  onBlur: FocusEventHandler;
  religionOptions: SelectOption[];
}

const ReRegFormOther: FC<Props> = ({
  formValues,
  onChange,
  onFocus,
  onBlur,
  religionOptions
}) => {
  const { gender, race, religion } = formValues;

  return (
    <Card title="Other Particulars">
      <FormRow>
        <FormCol className="sm:w-1/2">
          <FormLabel htmlFor="gender">Sex</FormLabel>
          <FormAttribute value={gender} />
        </FormCol>

        <FormCol className="sm:w-1/2">
          <FormLabel htmlFor="race">Race</FormLabel>
          <FormAttribute value={race} />
        </FormCol>
      </FormRow>

      <FormRow>
        <FormCol className="sm:w-1/2">
          <FormLabel htmlFor="religion">Religion</FormLabel>
          <Select
            id="religion"
            name="religion"
            value={religion}
            options={religionOptions}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>
      </FormRow>
    </Card>
  );
};

export default ReRegFormOther;
