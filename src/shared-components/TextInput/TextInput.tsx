import classnames from "classnames";
import React, {
  FC,
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler
} from "react";

import ErrorMessage from "../ErrorMessage";

interface Props {
  id: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  error?: string;
  onChange?: ChangeEventHandler;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onClearClick?: MouseEventHandler;
}

const TextInput: FC<Props> = ({
  id,
  name,
  value,
  placeholder,
  type = "text",
  error,
  onChange,
  onFocus,
  onBlur,
  onClearClick
}) => {
  const inputConditionalClass = {
    "border-red-600": error,
    "pr-8": onClearClick
  };

  return (
    <>
      <div className="relative flex items-center">
        <input
          id={id}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          className={classnames(
            `w-full p-3 appearance-none bg-white rounded border border-gray-400
            uppercase placeholder-gray-400 placeholder:normal-case
            focus:outline-none focus:border-blue-900`,
            inputConditionalClass
          )}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {onClearClick && value.length > 0 && (
          <i
            className="fas fa-times-circle text-gray-600 absolute right-0 mr-3"
            onClick={onClearClick}
          />
        )}
      </div>
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default TextInput;
