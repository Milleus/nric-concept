import React, { FC, ReactNode } from "react";

import Tooltip from "../Tooltip";

interface Props {
  children: ReactNode;
  htmlFor?: string;
  isOptional?: boolean;
  tooltipDescription?: ReactNode;
}

const FormLabel: FC<Props> = ({
  children,
  htmlFor,
  isOptional,
  tooltipDescription
}) => {
  return (
    <label htmlFor={htmlFor} className="flex items-center pb-1">
      <span>{children}</span>
      {isOptional && <em className="text-sm color-gray-400 ml-4">Optional</em>}
      {tooltipDescription && (
        <Tooltip iconClassName="fas fa-info-circle">
          {tooltipDescription}
        </Tooltip>
      )}
    </label>
  );
};

export default FormLabel;
