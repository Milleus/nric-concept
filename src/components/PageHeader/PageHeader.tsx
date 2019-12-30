import React, { FC } from "react";

import { DUMMY_LINK } from "../../routes/index";
import GridContainer from "../../shared-components/GridContainer";
import Navbar from "../../shared-components/Navbar";
import Masthead from "../../shared-components/Masthead";

const PageHeader: FC<{}> = () => {
  return (
    <>
      <Masthead title="Re-registration of NRIC concept" link={DUMMY_LINK} />
      <GridContainer>
        <img src="https://via.placeholder.com/150x100" alt="Logo"></img>
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
