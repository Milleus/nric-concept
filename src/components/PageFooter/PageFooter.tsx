import React, { FC } from "react";

import GridContainer from "../../shared-components/GridContainer";
import { DUMMY_LINK } from "../../routes/index";
import styles from "./style.module.scss";

const links = {
  feedback: [
    { label: "Contact Us", url: DUMMY_LINK },
    { label: "Feedback", url: DUMMY_LINK },
    { label: "Reach.gov.sg", url: DUMMY_LINK }
  ],
  social: [
    { iconName: "fab fa-facebook-f", url: DUMMY_LINK },
    { iconName: "fab fa-twitter", url: DUMMY_LINK },
    { iconName: "fab fa-youtube", url: DUMMY_LINK }
  ],
  other: [
    { label: "Privacy Statement", url: DUMMY_LINK },
    { label: "Terms of Use", url: DUMMY_LINK },
    { label: "Rate this Website", url: DUMMY_LINK },
    { label: "Sitemap", url: DUMMY_LINK }
  ]
};

const PageFooter: FC<{}> = () => {
  const renderFeedbackLinks = () => {
    return links.feedback.map((link, index) => {
      return (
        <a
          key={`feedback_${index}`}
          className="font-sans text-white lg:ml-4"
          href={link.url}
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    });
  };

  const renderSocialLinks = () => {
    return links.social.map((link, index) => {
      return (
        <a
          key={`social_${index}`}
          className={`font-sans mr-4 lg:mr-0 lg:ml-4 ${styles.socialLink}`}
          href={link.url}
          rel="noopener noreferrer"
        >
          <i className={link.iconName}></i>
        </a>
      );
    });
  };

  const renderOtherLinks = () => {
    return links.other.map((link, index) => {
      return (
        <a
          key={`other_${index}`}
          className="font-sans text-base text-white mr-4 lg:text-sm"
          href={link.url}
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    });
  };

  return (
    <footer className="bg-blue-900 text-white p-4 mt-20">
      <GridContainer>
        <div className="flex -mx-3">
          <div className="w-full px-3">
            <h2 className="font-sans text-white my-5">Site Name</h2>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="flex flex-col w-full items-start justify-center lg:flex-row lg:items-center lg:justify-end px-3">
            {renderFeedbackLinks()}
            <div className="flex mt-4 lg:mt-0">{renderSocialLinks()}</div>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="w-full px-3">
            <div className="border-b border-white my-4"></div>
          </div>
        </div>

        <div className="flex -mx-3">
          <div className="flex flex-col lg:flex-row px-3">
            {renderOtherLinks()}
          </div>
        </div>

        <div className="flex justify-start lg:justify-end -mx-3">
          <div className="flex flex-col lg:flex-row text-sm mt-6 mb-4 px-3">
            <span>&copy; {new Date().getFullYear()} Dummy Text.&nbsp;</span>
            <span>Last Updated on 30 December 2019.</span>
          </div>
        </div>

        <div className="flex items-center justify-start lg:justify-center -mx-3">
          <span className="text-sm font-semibold px-3">
            This website is optimised for IE version 10, 11, Firefox, Chrome,
            Safari.
          </span>
        </div>
      </GridContainer>
    </footer>
  );
};

export default PageFooter;
