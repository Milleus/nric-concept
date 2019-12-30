import React, { FC, ChangeEventHandler, useRef, ReactNode } from "react";

import Button, { ButtonAppearance } from "../Button";

interface Props {
  id: string;
  children: ReactNode;
  onChange: ChangeEventHandler;
}

const FileUpload: FC<Props> = ({ id, children, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const { current } = inputRef;

    if (current) {
      current.click();
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        id={id}
        type="file"
        className="hidden"
        onChange={onChange}
      />
      <Button appearance={ButtonAppearance.TERTIARY} onClick={handleClick}>
        {children}
      </Button>
    </>
  );
};

export default FileUpload;
