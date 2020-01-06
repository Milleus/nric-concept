import React, { FC, ChangeEventHandler, FocusEventHandler } from "react";

import { DUMMY_LINK } from "../../routes";
import { FormValues, Gender, Race } from "../../pages/ReRegFormPage";
import Card from "../../shared-components/Card";
import FormAttribute from "../../shared-components/FormAttribute";
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

const ReRegFormName: FC<Props> = ({
  formValues,
  onChange,
  onFocus,
  onBlur
}) => {
  const {
    principalName,
    aliasName,
    aliasHypyName,
    ethnicName,
    hypyName,
    marriedName,
    gender,
    race
  } = formValues;

  return (
    <Card
      title="Full Name"
      description="All names shown here will be printed on your IC."
    >
      <FormRow>
        <FormCol className="sm:w-1/2">
          <FormLabel htmlFor="principalName">Name</FormLabel>
          <TextInput
            id="principalName"
            name="principalName"
            value={principalName}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>
      </FormRow>

      <FormRow>
        <FormCol className="sm:w-1/2">
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
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>
      </FormRow>

      {aliasHypyName && (
        <FormRow>
          <FormCol className="sm:w-1/2">
            <FormLabel htmlFor="aliasHypyName">Alias in hanyu pinyin</FormLabel>
            <FormAttribute value={aliasHypyName} />
          </FormCol>
        </FormRow>
      )}

      <FormRow>
        <FormCol className="sm:w-1/2">
          <FormLabel
            htmlFor="ethnicName"
            isOptional={true}
            tooltipDescription="A name in Chinese, Jawi or Tamil."
          >
            Ethnic name
          </FormLabel>
          <TextInput
            id="ethnicName"
            name="ethnicName"
            value={ethnicName}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormCol>
      </FormRow>

      {race === Race.CHINESE && (
        <FormRow>
          <FormCol className="sm:w-1/2">
            <FormLabel htmlFor="hypyName">
              Ethnic name in hanyu pinyin
            </FormLabel>
            <TextInput
              id="hypyName"
              name="hypyName"
              value={hypyName}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </FormCol>
        </FormRow>
      )}

      {gender === Gender.FEMALE && (
        <FormRow>
          <FormCol className="sm:w-1/2">
            <FormLabel
              htmlFor="marriedName"
              isOptional={true}
              tooltipDescription={
                <span>
                  A name that includes a family name or surname adopted upon
                  marriage.{" "}
                  <a
                    className="text-white"
                    href={DUMMY_LINK}
                    rel="noopener noreferrer"
                  >
                    View examples
                  </a>
                </span>
              }
            >
              Married name
            </FormLabel>
            <TextInput
              id="marriedName"
              name="marriedName"
              value={marriedName}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </FormCol>
        </FormRow>
      )}
    </Card>
  );
};

export default ReRegFormName;
