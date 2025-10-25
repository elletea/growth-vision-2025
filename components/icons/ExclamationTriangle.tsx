import React from 'react';

export interface ExclamationTriangleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ExclamationTriangle: React.FC<ExclamationTriangleProps> = ({
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
      <path d="M11.9999 15C12.8283 15.0001 13.4999 15.6716 13.4999 16.5C13.4999 17.3284 12.8283 17.9999 11.9999 18C11.1715 18 10.4999 17.3284 10.4999 16.5C10.4999 15.6716 11.1715 15 11.9999 15Z" fill={color}/>
  <path d="M12.9999 13.5H10.9999V9H12.9999V13.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 2C12.3511 2.00003 12.6766 2.18425 12.8573 2.48535L23.3573 19.9854C23.5427 20.2943 23.5475 20.6797 23.37 20.9932C23.1925 21.3064 22.86 21.5 22.4999 21.5H1.49992C1.13981 21.5 0.807371 21.3064 0.629806 20.9932C0.4523 20.6797 0.457143 20.2943 0.642501 19.9854L11.1425 2.48535L11.2167 2.37793C11.4049 2.14097 11.6926 2 11.9999 2ZM3.26652 19.5H20.7333L11.9999 4.94336L3.26652 19.5Z" fill={color}/>
    </svg>
  );
};

export default ExclamationTriangle;
