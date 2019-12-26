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
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
      onChange={onChange}
    />
  );
};

export default TextInput;
