import { format } from "date-fns";
import React, { FC } from "react";

import { FormValues } from "../../pages/ReRegFormPage";
import barCode from "./images/barcode.svg";
import thumbprint from "./images/thumbprint.svg";
import styles from "./style.module.scss";

interface Props {
  formValues: FormValues;
}

const IdentityCardBack: FC<Props> = ({ formValues }) => {
  const {
    nricNumber,
    postalCode,
    blockNo,
    streetName,
    floorNo,
    unitNo
  } = formValues;

  return (
    <div id="cardBack" className={`${styles.card} ${styles.back}`}>
      <img src={barCode} alt="barcode" className="w-full mb-2" />

      <div className="w-full h-full">
        <div className="flex mb-1">
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
              <p className="text-gray-800 text-xs font-semibold mt-1">
                Date of issue
              </p>
              <p className="font-semibold text-sm leading-tight">
                {format(new Date(), "dd-MM-yyyy")}
              </p>
            </div>
          </div>
        </div>

        <label htmlFor="postalCode" className="cursor-pointer">
          <p className="text-gray-800 text-xs font-semibold">Address</p>
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
        </label>
      </div>
    </div>
  );
};

export default IdentityCardBack;
