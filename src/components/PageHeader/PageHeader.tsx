import React, { FC } from "react";

import { DUMMY_LINK } from "../../routes/index";
import GridContainer from "../../shared-components/GridContainer";
import Navbar from "../../shared-components/Navbar";
import Masthead from "../../shared-components/Masthead";
import { ReactComponent as IcaLogo } from "./images/ica-logo.svg";

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
