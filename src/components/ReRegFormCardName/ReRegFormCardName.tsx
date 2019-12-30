import React, { FC, ChangeEventHandler, FocusEventHandler } from "react";

import Card from "../../shared-components/Card";
import FormLabel from "../../shared-components/FormLabel";
import TextInput from "../../shared-components/TextInput";
import { FormValues, Gender, Race } from "../../pages/ReRegFormPage";
import FormAttribute from "../../shared-components/FormAttribute";
import { DUMMY_LINK } from "../../routes";

interface Props {
  formValues: FormValues;
  onChange: ChangeEventHandler;
  onFocus: FocusEventHandler;
  onBlur: FocusEventHandler;
}

const ReRegFormCardName: FC<Props> = ({
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
      <div className="flex -mx-3">
        <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
          <FormLabel htmlFor="principalName">Name</FormLabel>
          <TextInput
            id="principalName"
            name="principalName"
            value={principalName}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
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
        </div>
      </div>

      {aliasHypyName && (
        <div className="flex -mx-3">
          <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
            <FormLabel htmlFor="aliasHypyName">Alias in hanyu pinyin</FormLabel>
            <FormAttribute value={aliasHypyName} />
          </div>
        </div>
      )}

      <div className="flex -mx-3">
        <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
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
        </div>
      </div>

      {race === Race.CHINESE && (
        <div className="flex -mx-3">
          <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
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
          </div>
        </div>
      )}

      {gender === Gender.FEMALE && (
        <div className="flex -mx-3">
          <div className="w-full lg:w-1/2 xl:w-1/2 px-3 mb-6">
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
          </div>
        </div>
      )}
    </Card>
  );
};

export default ReRegFormCardName;
