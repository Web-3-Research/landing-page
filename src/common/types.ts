export interface ContainerProps {
  border?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}


export interface ButtonProps {
  color?: "default" | "primary" | "secondary";
  fixedWidth?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean; // Add 'disabled' property as optional
}



export interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}
export interface SvgIconProps1 {
  object: object;

}
export interface InputProps {
  name: string;
  placeholder: string;
  t: any;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}
