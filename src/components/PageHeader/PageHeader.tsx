import React, { FC } from "react";

import { DUMMY_LINK } from "../../routes/index";
import { ReactComponent as IcaLogo } from "./images/ica-logo.svg";
import GridContainer from "../../shared-components/GridContainer";
import Masthead from "../../shared-components/Masthead";
import Navbar from "../../shared-components/Navbar";

const PageHeader: FC<{}> = () => {
  return (
    <>
      <Masthead title="Re-registration of NRIC concept" link={DUMMY_LINK} />
      <GridContainer>
        <IcaLogo />
      </GridContainer>
      <Navbar>
        <a
          href={DUMMY_LINK}
          rel="noopener noreferrer"
          className="text-white font-normal"
        >
          <i className="fas fa-home mr-2" />
          Home
        </a>
      </Navbar>
    </>
  );
};

export default PageHeader;
