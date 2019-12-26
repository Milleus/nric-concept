import classnames from "classnames";
import React, { FC, ChangeEventHandler, FocusEventHandler } from "react";

import ErrorMessage from "../ErrorMessage";

export interface SelectOption {
  label: string;
  value: string;
}

interface Props {
  id: string;
  name: string;
  value: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  onChange?: ChangeEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
}

const Select: FC<Props> = ({
  id,
  name,
  value,
  options,
  placeholder = "Please select",
  error,
  onChange,
  onFocus,
  onBlur
}) => {
  const renderOptions = () => {
    const displayOptions = [];

    displayOptions.push(
      <option key="option_placeholder" value="" disabled>
        {placeholder}
      </option>
    );

    options.forEach((option, index) => {
      displayOptions.push(
        <option key={`option_${index}`} value={option.value}>
          {option.label}
        </option>
      );
    });

    return displayOptions;
  };

  const selectConditionalClass = {
    "normal-case text-gray-400": value === "",
    "border-red-600": error
  };

  return (
    <>
      <div className="relative flex items-center">
        <select
          id={id}
          name={name}
          className={classnames(
            `w-full p-3 appearance-none bg-white rounded border border-gray-400
            focus:outline-none focus:border-blue-900`,
            selectConditionalClass
          )}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {renderOptions()}
        </select>
        <i className="fas fa-sort absolute right-0 mr-3 pointer-events-none" />
      </div>
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default Select;
