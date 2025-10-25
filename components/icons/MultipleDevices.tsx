import React from 'react';

export interface MultipleDevicesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MultipleDevices: React.FC<MultipleDevicesProps> = ({
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
      <path d="M22 6C23.1046 6 24 6.89543 24 8V19C24 20.1046 23.1046 21 22 21H15C13.8954 21 13 20.1046 13 19V16H15V19H22V8H17V6H22Z" fill={color}/>
  <path d="M10 18H5V16H10V18Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M13.2041 3.01074C14.2128 3.113 15 3.96435 15 5V12C15 13.1046 14.1046 14 13 14H2C0.895431 14 0 13.1046 0 12V5C4.02666e-09 3.89543 0.89543 3 2 3H13L13.2041 3.01074ZM2 12H13V5H2V12Z" fill={color}/>
    </svg>
  );
};

export default MultipleDevices;
