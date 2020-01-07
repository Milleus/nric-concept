import classnames from "classnames/bind";
import React, { FC, useEffect, useState } from "react";

import { FormValues, ActiveField } from "../../pages/ReRegFormPage";
import IdentityCardBack from "./IdentityCardBack";
import IdentityCardFront from "./IdentityCardFront";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

interface Props {
  formValues: FormValues;
  activeField: ActiveField;
}

const IdentityCardPreview: FC<Props> = ({ formValues, activeField }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const flipAnchor = document.getElementById("flipAnchor");
      const cardFront = document.getElementById("cardFront");
      const cardBack = document.getElementById("cardBack");
      const currentScroll = window.pageYOffset;
      const anchorOffset = 200;

      if (flipAnchor && cardFront && cardBack) {
        const flipFlag =
          currentScroll + anchorOffset > flipAnchor.offsetTop ? true : false;

        setIsFlipped(flipFlag);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardContainerClass = cx({
    cardContainer: true,
    scrollFlip: activeField === ActiveField.NONE && isFlipped,
    activePhoto: activeField === ActiveField.PHOTO,
    activeName: activeField === ActiveField.NAME,
    activeAddress: activeField === ActiveField.ADDRESS
  });

  return (
    <div className={styles.identityCardPreview}>
      <h2 className="mb-2">Preview</h2>

      <div className={cardContainerClass}>
        <IdentityCardFront formValues={formValues} />
        <IdentityCardBack formValues={formValues} />
        <div className={styles.helper} />
      </div>
    </div>
  );
};

export default IdentityCardPreview;
