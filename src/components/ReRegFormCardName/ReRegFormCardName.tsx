import React, { FC, ChangeEventHandler } from "react";

import Card from "../../shared-components/Card";
import FormLabel from "../../shared-components/FormLabel";
import TextInput from "../../shared-components/TextInput";
import { FormValues } from "../../pages/ReRegFormPage/ReRegFormPage";
import FormAttribute from "../../shared-components/FormAttribute";

interface Props {
  formValues: FormValues;
  onChange: ChangeEventHandler;
}

const ReRegFormCardName: FC<Props> = ({ formValues, onChange }) => {
  const { principalName, aliasName, aliasHypyName } = formValues;

  return (
    <Card
      title="Full Name"
      description="All names shown here will be printed on your IC."
    >
      <div className="flex flex-column -mx-2">
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2">
          <FormLabel htmlFor="principalName">Name</FormLabel>
          <TextInput
            id="principalName"
            name="principalName"
            value={principalName}
            onChange={onChange}
          />
        </div>

        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2">
          <FormLabel
            htmlFor="aliasName"
            isOptional={true}
            tooltipDescription="An alternate name one can choose to adopt."
          >
            Alias
          </FormLabel>
          <TextInput
            id="aliasName"
            name="aliasName"
            value={aliasName}
            onChange={onChange}
          />
        </div>

        {/* {aliasHypyName && ( */}
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2">
          <FormLabel htmlFor="aliasHypyName">Alias in hanyu pinyin</FormLabel>
          <FormAttribute value={aliasHypyName} />
        </div>
        {/* )} */}
      </div>
    </Card>
  );
};

export default ReRegFormCardName;
