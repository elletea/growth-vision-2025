import React from 'react';

export interface CheckoutVariableProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CheckoutVariable: React.FC<CheckoutVariableProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  style,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      <path d="M10.9995 21.0005H2.99951V19.0005H10.9995V21.0005Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M20.0005 15.0005C20.5525 15.0008 21.0005 15.4484 21.0005 16.0005V20.0005C21.0002 20.5524 20.5524 21.0002 20.0005 21.0005H14.0005C13.7355 21.0005 13.4809 20.8948 13.2935 20.7075C13.106 20.5201 13.0006 20.2655 13.0005 20.0005V16.0005C13.0005 15.4482 13.4482 15.0005 14.0005 15.0005H20.0005ZM15.0005 19.0005H19.0005V17.0005H15.0005V19.0005Z" fill={color}/>
  <path d="M11.0005 17.0005H2.99951L3.00049 15.0005H11.0005V17.0005Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M10.0005 3.00049C10.5525 3.00075 11.0005 3.44837 11.0005 4.00049L10.9995 12.0005C10.9992 12.5525 10.5516 13.0005 9.99951 13.0005H3.99951C3.73447 13.0004 3.4799 12.8949 3.29248 12.7075C3.10506 12.5201 2.99964 12.2655 2.99951 12.0005L3.00049 3.99951C3.00075 3.44745 3.44837 2.99951 4.00049 2.99951L10.0005 3.00049ZM4.99951 11.0005H8.99951L9.00049 5.00049H5.00049L4.99951 11.0005Z" fill={color}/>
  <path d="M21.0005 13.0005H13.0005V11.0005H21.0005V13.0005Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M20.0005 3.00049C20.5525 3.00075 21.0005 3.44837 21.0005 4.00049V8.00049C21.0002 8.55239 20.5524 9.00022 20.0005 9.00049H14.0005C13.7355 9.00049 13.4809 8.89475 13.2935 8.70752C13.106 8.5201 13.0006 8.26553 13.0005 8.00049V3.99951C13.0008 3.44745 13.4484 2.99951 14.0005 2.99951L20.0005 3.00049ZM15.0005 7.00049H19.0005V5.00049H15.0005V7.00049Z" fill={color}/>
    </svg>
  );
};

export default CheckoutVariable;
