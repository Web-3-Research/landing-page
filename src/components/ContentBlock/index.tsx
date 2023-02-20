import React from "react";
import { withTranslation, WithTranslation, TFunction } from "react-i18next";
import LeftContentBlock from "./LeftContentBlock";
import CenterContentBlock from "./CenterContentBlock";
import RightContentBlock from "./RightContentBlock";

interface TranslationProps extends WithTranslation<"translation", undefined> {}


interface ContentBlockProps extends TranslationProps {
  type: string;
  icon: string;
  title: string;
  content: string;
  section?: any[];
  button?: any;
  id: string;
  translate?: any;
  tReady: boolean;
  t: TFunction<any>; // Change the type of the t prop here
}

export interface LeftContentBlockProps extends ContentBlockProps {
  t: TFunction<any>; // Change the type of the t prop here
}

export interface CenterContentBlockProps extends ContentBlockProps {
  t: TFunction<any>; // Change the type of the t prop here
}

export interface RightContentBlockProps extends ContentBlockProps {
  t: TFunction<any>; // Change the type of the t prop here
}

const ContentBlock: React.FC<ContentBlockProps> = (props: ContentBlockProps) => {
  const { t, ...otherProps } = props;
  if (props.type === "left") return <LeftContentBlock {...otherProps} t={t} />;
  if (props.type === "center") return <CenterContentBlock {...otherProps} t={t} />;
  if (props.type === "right") return <RightContentBlock {...otherProps} t={t} />;
  return null;
};

export default withTranslation()(ContentBlock);