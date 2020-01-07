import React, { FC } from "react";

import { FormValues } from "../../pages/ReRegFormPage";
import photoUploadPreview from "./images/photo-upload-preview.svg";
import styles from "./style.module.scss";

interface Props {
  formValues: FormValues;
}

const IdentityCardFront: FC<Props> = ({ formValues }) => {
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

  return (
    <div
      className={`flex flex-col p-4 bg-pink-200 rounded-lg ${styles.card} ${styles.front}`}
    >
      <div className="bg-gray-400 px-4 mb-2 -mx-4">
        <p className="font-semibold text-sm">
          IDENTITY CARD NO. <span className="text-base">{nricNumber}</span>
        </p>
      </div>

      <div className="flex">
        <div className="w-1/4 mr-3">
          <label htmlFor="uploadPhoto" className="cursor-pointer">
            <img
              src={!!photoBase64Image ? photoBase64Image : photoUploadPreview}
              alt="preview large"
              className={`w-full ml-auto mb-2 ${styles.previewLarge}`}
            />
            <img
              src={!!photoBase64Image ? photoBase64Image : photoUploadPreview}
              alt="preview small"
              className={`w-full ml-auto rounded-lg ${styles.previewSmall}`}
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

            <div className="w-1/2">{renderMinorLabelField("Sex", gender)}</div>
          </div>

          {renderMinorLabelField("Country of birth", countryOfBirth)}
        </div>
      </div>
    </div>
  );
};

export default IdentityCardFront;
