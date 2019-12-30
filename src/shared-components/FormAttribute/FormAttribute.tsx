import React, { FC, ReactNode } from "react";

interface Props {
  value: ReactNode;
}

const FormAttribute: FC<Props> = ({ value }) => {
  return <div className="py-3 text-black text-lg">{value}</div>;
};

export default FormAttribute;
