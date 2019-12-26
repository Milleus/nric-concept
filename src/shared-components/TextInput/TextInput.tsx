import React, { FC, ChangeEventHandler } from "react";

interface Props {
  id: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
}

const TextInput: FC<Props> = ({
  id,
  name,
  value,
  placeholder,
  type = "text",
  onChange
}) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className="appearance-none rounded w-full p-3 uppercase border border-gray-400 placeholder-gray-400 focus:outline-none focus:border-blue-900"
      onChange={onChange}
    />
  );
};

export default TextInput;
