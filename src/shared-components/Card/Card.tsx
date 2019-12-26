import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
  id?: string;
}

const Card: FC<Props> = ({ children, title, description, id }) => {
  return (
    <div
      id={id}
      className="w-full rounded overflow-hidden bg-white shadow my-8"
    >
      <div className="border-b border-gray-400 p-6">
        <h2>{title}</h2>
        {description && <p className="mt-2">{description}</p>}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Card;
