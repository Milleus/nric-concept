import classnames from "classnames/bind";
import React, { FC } from "react";

import { FormValues, ActiveField } from "../../pages/ReRegFormPage";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

interface Props {
  formValues: FormValues;
  activeField: ActiveField;
}

const IdentityCard: FC<Props> = ({ formValues, activeField }) => {
  const {
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
    name: activeField === ActiveField.NAME
  });

  return (
    <div
      className={`bg-pink-200 rounded-lg overflow-hidden relative ${styles.nric}`}
    >
      <div id="helper" className={focusBoxClass}></div>
      <div className="bg-gray-400 p-2 mt-4 text-lg">
        IDENTITY CARD NO. <span className="font-semibold">{nricNumber}</span>
      </div>

      <div className="flex p-2 -mx-3">
        <div className="w-full sm:w-1/3 px-3">
          <img />
        </div>

        <div className="w-full sm:w-2/3 px-3">
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

          <div className="flex -mx-3">
            <div className="w-full sm:1/2 px-3">
              {renderMinorLabelField("Date of birth", dateOfBirth)}
            </div>

            <div className="w-full sm:1/2 px-3">
              {renderMinorLabelField("Sex", gender)}
            </div>
          </div>

          {renderMinorLabelField("Country of birth", countryOfBirth)}
        </div>
      </div>
    </div>
  );
};

export default IdentityCard;
