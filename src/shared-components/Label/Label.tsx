import React, { FC, ReactNode } from "react";

interface Props {
  htmlFor: string;
  children: ReactNode;
}

const Label: FC<Props> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm block font-bold pb-2">
      {children}
    </label>
  );
};

export default Label;
