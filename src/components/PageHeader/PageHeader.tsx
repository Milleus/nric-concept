import React, { FC } from "react";

import { DUMMY_LINK } from "../../routes/index";
import { ReactComponent as IcaLogo } from "./images/ica-logo.svg";
import GridContainer from "../../shared-components/GridContainer";
import Navbar from "../../shared-components/Navbar";

const PageHeader: FC<{}> = () => {
  return (
    <>
      <GridContainer>
        <IcaLogo className="py-3" />
      </GridContainer>
      <Navbar>
        <a
          href={DUMMY_LINK}
          rel="noopener noreferrer"
          className="text-white font-normal"
        >
          <i className="fas fa-home mr-2" />
          ICA Website
        </a>
      </Navbar>
    </>
  );
};

export default PageHeader;
