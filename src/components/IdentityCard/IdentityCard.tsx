import { format } from "date-fns";
import classnames from "classnames/bind";
import React, { FC, useEffect, useRef } from "react";

import { FormValues, ActiveField } from "../../pages/ReRegFormPage";
import photoUploadPreview from "./images/photo-upload-preview.svg";
import barCode from "./images/barcode.svg";
import thumbprint from "./images/thumbprint.svg";
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

  const renderMinorLabelField = (label: string, value: string) => {
    return (
      <>
        <p className="text-gray-800 text-xs font-semibold mt-1">{label}</p>
        <p className="font-semibold text-sm leading-tight">{value}</p>
      </>
    );
  };

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
    countryOfBirth,
    postalCode,
    blockNo,
    streetName,
    floorNo,
    unitNo
  } = formValues;

  const focusBoxClass = cx({
    focusBox: true,
    photo: activeField === ActiveField.PHOTO,
    name: activeField === ActiveField.NAME,
    address: activeField === ActiveField.ADDRESS
  });

  return (
    <div ref={identifyCardRef} className={styles.identityCard}>
      <h2 className="mb-2">Preview</h2>

      {/* front */}
      <div
        className={`bg-pink-200 rounded-lg overflow-hidden shadow-lg relative ${styles.card} ${styles.front}`}
      >
        <div className={focusBoxClass} />
        <div className="bg-gray-400">
          <p className="font-semibold px-4 mt-4 text-sm">
            IDENTITY CARD NO. <span className="text-base">{nricNumber}</span>
          </p>
        </div>

        <div className="flex px-4 py-2">
          <div className="w-1/4 mr-3">
            <label htmlFor="uploadPhoto" className="cursor-pointer">
              <img
                src={!!photoBase64Image ? photoBase64Image : photoUploadPreview}
                alt="preview large"
                className={` ml-auto mb-2 ${styles.previewLarge}`}
              />
              <img
                src={!!photoBase64Image ? photoBase64Image : photoUploadPreview}
                alt="preview small"
                className={`ml-auto rounded-lg ${styles.previewSmall}`}
              />
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

      {/* back */}
      <div
        className={`bg-pink-200 rounded-lg overflow-hidden shadow-lg relative mt-2 ${styles.card} ${styles.back}`}
      >
        <img src={barCode} alt="barcode" className="px-4 mt-4" />

        <div className="px-4 py-2">
          <div className="flex">
            <div className="w-1/4 mr-3">
              <img
                src={thumbprint}
                alt="thumbprint"
                className={styles.thumbprint}
              />
            </div>

            <div className="flex flex-col justify-between w-3/4">
              <p className="text-gray-800 text-xs font-semibold">
                NRIC No.
                <span className="text-base leading-tight">{nricNumber}</span>
              </p>
              <div>
                {renderMinorLabelField(
                  "Date of issue",
                  format(new Date(), "dd-MM-yyyy")
                )}
              </div>
            </div>
          </div>

          <p className="text-gray-800 text-xs font-semibold mt-1">Address</p>
          <p className="font-semibold text-sm leading-tight">
            {blockNo} {streetName}
            <br />
            {unitNo && floorNo && (
              <>
                #{unitNo}-{floorNo}
                <br />
              </>
            )}
            SINGAPORE {postalCode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdentityCard;
