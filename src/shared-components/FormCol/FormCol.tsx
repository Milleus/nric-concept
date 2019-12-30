import classnames from "classnames";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const FormCol: FC<Props> = ({ children, className }) => {
  return (
    <div className={classnames("w-full px-3 mb-6", className)}>{children}</div>
  );
};

export default FormCol;
