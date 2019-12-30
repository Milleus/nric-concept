import React, { FC } from "react";

import { ReactComponent as LionheadMast } from "./images/lionhead-mast.svg";
import GridContainer from "../GridContainer";

interface MastheadProps {
  link: string;
  title: string;
}

const Masthead: FC<MastheadProps> = ({ link, title }) => (
  <section className="bg-gray-300">
    <GridContainer>
      <a
        href={link}
        rel="noopener noreferrer"
        className="flex items-center h-6 font-lato text-xs text-black"
      >
        <LionheadMast />
        <span className="ml-1">{title}</span>
      </a>
    </GridContainer>
  </section>
);

export default Masthead;
