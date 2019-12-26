import React, { FC, ReactNode } from "react";

interface Props {
  value: ReactNode;
}

const FormAttribute: FC<Props> = ({ value }) => {
  return <div className="py-3 text-black">{value}</div>;
};

export default FormAttribute;
