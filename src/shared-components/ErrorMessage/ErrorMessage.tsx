import React, { FC } from "react";

const ErrorMessage: FC<{}> = ({ children }) => {
  return children ? (
    <span className="flex items-center mt-1 text-sm text-red-600">
      <i className="fa fa-exclamation-circle text-base m-1 mr-2" />
      {children}
    </span>
  ) : null;
};

export default ErrorMessage;
