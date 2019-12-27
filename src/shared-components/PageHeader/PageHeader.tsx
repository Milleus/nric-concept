import React, { FC } from "react";

import { GOV_SG, ICA_ESERVICE_DASHBOARD } from "../../routes/index";
import { ReactComponent as IcaLogo } from "./images/ica-logo.svg";
import Masthead from "../Masthead";
import GridContainer from "../GridContainer";
import Navbar from "../Navbar";

const PageHeader: FC<{}> = () => {
  return (
    <>
      <Masthead link={GOV_SG} title="A Singapore Government Agency Website" />
      <GridContainer>
        <IcaLogo className="py-3" />
      </GridContainer>
      <Navbar>
        <a
          href={ICA_ESERVICE_DASHBOARD}
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
