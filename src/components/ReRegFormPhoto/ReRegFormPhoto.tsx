import React, { FC, ChangeEventHandler } from "react";

import Card from "../../shared-components/Card";
import FileUpload from "../../shared-components/FileUpload";
import photoUploadPreview from "./images/photo-upload-preview.svg";
import contrastDo from "./images/contrast-do.svg";
import contrastDont from "./images/contrast-dont.svg";
import spaceDo from "./images/space-do.svg";
import spaceDont from "./images/space-dont.svg";
import backgroundDo from "./images/background-do.svg";
import backgroundDont from "./images/background-dont.svg";
import { FormValues } from "../../pages/ReRegFormPage";
import styles from "./style.module.scss";

const guidePhotos = {
  contrast: {
    doSrc: contrastDo,
    dontSrc: contrastDont,
    description: "Wear colour that contrasts with a plain white background"
  },
  space: {
    doSrc: spaceDo,
    dontSrc: spaceDont,
    description: "Leave clear space around the head"
  },
  background: {
    doSrc: backgroundDo,
    dontSrc: backgroundDont,
    description: "Use even lighting with no background shadows"
  }
};

interface Props {
  formValues: FormValues;
  onUploadChange: ChangeEventHandler;
}

const ReRegFormPhoto: FC<Props> = ({ formValues, onUploadChange }) => {
  const { photoBase64Image } = formValues;

  const renderGuide = (type: keyof typeof guidePhotos) => {
    const { doSrc, dontSrc, description } = guidePhotos[type];

    return (
      <>
        <div className="flex justify-between mb-4">
          <img src={doSrc} alt={`${type} do sample`} className="h-32 w-full" />
          <img
            src={dontSrc}
            alt={`${type} dont sample`}
            className="h-32 w-full"
          />
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-1/2 text-center">
            <i className="fas fa-check-circle text-lg text-green-700" />
          </div>
          <div className="w-1/2 text-center">
            <i className="fas fa-times-circle text-lg text-red-700" />
          </div>
        </div>
        <p className="text-sm mb-4">{description}</p>
      </>
    );
  };

  return (
    <Card
      title="Photo"
      description="Upload a recent photo. It will be automatically cropped and colour corrected to be used for the IC."
    >
      <div className="flex flex-col sm:flex-row -mx-3">
        <div className="flex flex-col items-center w-full md:w-1/4 px-3 mb-4">
          <img
            src={!!photoBase64Image ? photoBase64Image : photoUploadPreview}
            alt="upload preview"
            className={`mb-4 ${styles.preview}`}
          />
          <p className="text-sm text-center mb-4">
            Supported file types:
            <br />
            .jpeg, .jpg, .png
          </p>
          <FileUpload id="uploadPhoto" onChange={onUploadChange}>
            {!!photoBase64Image ? "Change photo" : "Upload photo"}
          </FileUpload>
        </div>

        <div className="w-full md:w-3/4 px-3">
          <p className="font-semibold mb-6">Photo do&apos;s and don&apos;ts</p>
          <div className="flex flex-col xl:flex-row -mx-3">
            <div className="w-full px-3">{renderGuide("contrast")}</div>
            <div className="w-full px-3">{renderGuide("space")}</div>
            <div className="w-full px-3">{renderGuide("background")}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ReRegFormPhoto;
