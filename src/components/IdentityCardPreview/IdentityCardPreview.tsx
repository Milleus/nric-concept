import classnames from "classnames/bind";
import React, { FC, useEffect, useRef } from "react";

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
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stickyOffet = 40;
    let elementOffsetTop = 0;

    const handleScroll = () => {
      const { current } = previewRef;

      if (current) {
        if (elementOffsetTop === 0) {
          elementOffsetTop = current.offsetTop;
        }

        const currentScroll = window.pageYOffset;

        if (currentScroll + stickyOffet > elementOffsetTop) {
          current.classList.add("sticky");
          current.style.top = `${stickyOffet}px`;
        } else {
          current.classList.remove("sticky");
        }
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
    activeNone: activeField === ActiveField.NONE,
    activePhoto: activeField === ActiveField.PHOTO,
    activeName: activeField === ActiveField.NAME,
    activeAddress: activeField === ActiveField.ADDRESS
  });

  return (
    <div ref={previewRef} className={styles.identityCardPreview}>
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
