import classnames from "classnames";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const FormRow: FC<Props> = ({ children, className }) => {
  return <div className={classnames("flex -mx-3", className)}>{children}</div>;
};

export default FormRow;
