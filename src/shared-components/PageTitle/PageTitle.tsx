import React, { FC, ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

const PageTitle: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className="mt-16 mb-10">
      <h2 className="mb-3">{subtitle}</h2>
      <h1>{title}</h1>
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
};

export default PageTitle;
