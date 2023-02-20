export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  section?: Array<any>;
  button?: any;
  t?: any;
  id: string;
  type?: string;
  translate?: any;
}



export interface LeftContentBlockProps extends ContentBlockProps {}

export interface CenterContentBlockProps extends ContentBlockProps {}

export interface RightContentBlockProps extends ContentBlockProps {}
