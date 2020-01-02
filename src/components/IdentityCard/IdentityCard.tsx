import classnames from "classnames/bind";
import React, { FC, useEffect, useRef } from "react";

import { FormValues, ActiveField } from "../../pages/ReRegFormPage";
import photoUploadPreview from "./images/photo-upload-preview.svg";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

interface Props {
  formValues: FormValues;
  activeField: ActiveField;
}

const IdentityCard: FC<Props> = ({ formValues, activeField }) => {
  const identifyCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stickyOffet = 40;
    let elementOffsetTop = 0;

    const handleScroll = () => {
      const { current } = identifyCardRef;

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

  const {
    photoBase64Image,
    nricNumber,
    principalName,
    aliasName,
    ethnicName,
    marriedName,
    race,
    gender,
    dateOfBirth,
    countryOfBirth
  } = formValues;

  const renderMinorLabelField = (label: string, value: string) => {
    return (
      <>
        <p className="text-gray-800 text-xs font-semibold mt-1">{label}</p>
        <p className="font-semibold text-sm leading-tight">{value}</p>
      </>
    );
  };

  const focusBoxClass = cx({
    focusBox: true,
    photo: activeField === ActiveField.PHOTO,
    name: activeField === ActiveField.NAME
  });

  return (
    <div ref={identifyCardRef} className={styles.identityCard}>
      <h2 className="mb-2">Preview</h2>
      <div className="bg-pink-200 rounded-lg overflow-hidden shadow-lg">
        <div id="helper" className={focusBoxClass} />
        <div className="bg-gray-400 p-2 mt-4 text-lg">
          IDENTITY CARD NO. <span className="font-semibold">{nricNumber}</span>
        </div>

        <div className="flex p-2">
          <div className="w-1/4 mr-3">
            <label htmlFor="uploadPhoto" className="cursor-pointer">
              <div className="flex flex-col items-end">
                <img
                  src={
                    !!photoBase64Image ? photoBase64Image : photoUploadPreview
                  }
                  alt="preview large"
                  className={`mb-2 ${styles.previewLarge}`}
                />
                <img
                  src={
                    !!photoBase64Image ? photoBase64Image : photoUploadPreview
                  }
                  alt="preview small"
                  className={styles.previewSmall}
                />
              </div>
            </label>
          </div>

          <div className="w-3/4">
            <label htmlFor="principalName" className="cursor-pointer">
              <p className="text-gray-800 text-xs font-semibold">Name</p>
              <p className="font-semibold leading-tight">
                {principalName}
                {aliasName && <span>@{aliasName}</span>}
              </p>
              {marriedName && (
                <p className="font-semibold leading-tight">{marriedName}</p>
              )}
              {ethnicName && (
                <p className="font-semibold leading-tight">{ethnicName}</p>
              )}
            </label>

            {renderMinorLabelField("Race", race)}

            <div className="flex">
              <div className="w-1/2 mr-3">
                {renderMinorLabelField("Date of birth", dateOfBirth)}
              </div>

              <div className="w-1/2">
                {renderMinorLabelField("Sex", gender)}
              </div>
            </div>

            {renderMinorLabelField("Country of birth", countryOfBirth)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityCard;
