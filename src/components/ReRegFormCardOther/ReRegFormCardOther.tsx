import React, { FC, ChangeEventHandler } from "react";

import { FormValues } from "../../pages/ReRegFormPage";
import Select, { SelectOption } from "../../shared-components/Select/Select";
import Card from "../../shared-components/Card";
import FormLabel from "../../shared-components/FormLabel";
import FormAttribute from "../../shared-components/FormAttribute";

interface Props {
  formValues: FormValues;
  onChange: ChangeEventHandler;
  religionOptions: SelectOption[];
}

const ReRegFormCardOther: FC<Props> = ({
  formValues,
  onChange,
  religionOptions
}) => {
  const { gender, race, religion } = formValues;

  return (
    <Card title="Other Particulars">
      <div className="flex -mx-3">
        <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
          <FormLabel htmlFor="gender">Sex</FormLabel>
          <FormAttribute value={gender} />
        </div>

        <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
          <FormLabel htmlFor="race">Race</FormLabel>
          <FormAttribute value={race} />
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
          <FormLabel htmlFor="religion">Religion</FormLabel>
          <Select
            id="religion"
            name="religion"
            value={religion}
            options={religionOptions}
            onChange={onChange}
          />
        </div>
      </div>
    </Card>
  );
};

export default ReRegFormCardOther;
