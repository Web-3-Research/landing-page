import LeftContentBlock from "./LeftContentBlock";
import CenterContentBlock from "./CenterContentBlock";
import RightContentBlock from "./RightContentBlock";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "center") return <CenterContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default ContentBlock;
