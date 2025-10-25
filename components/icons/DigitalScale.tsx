import React from 'react';

export interface DigitalScaleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DigitalScale: React.FC<DigitalScaleProps> = ({
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
      <path d="M15.5004 13.5C16.3287 13.5001 17.0004 14.1716 17.0004 15C17.0004 15.8284 16.3287 16.4999 15.5004 16.5C14.672 16.5 14.0004 15.8284 14.0004 15C14.0004 14.1716 14.672 13.5 15.5004 13.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M18.7191 10C19.6366 10.0001 20.4369 10.6246 20.6596 11.5146L22.1596 17.5146C22.4751 18.7768 21.5201 19.9998 20.2191 20H3.78164C2.4805 20 1.52564 18.7769 1.84121 17.5146L3.34121 11.5146C3.56394 10.6245 4.36405 10 5.28164 10H18.7191ZM3.78164 18H20.2191L18.7191 12H5.28164L3.78164 18Z" fill={color}/>
  <path d="M21.3676 3.99609L19.6557 6.99219C19.2996 7.61523 18.637 7.99999 17.9193 8H6.07949C5.36214 7.9997 4.69912 7.61504 4.34316 6.99219L2.63125 3.99609L4.36758 3.00391L6.07949 6H17.9193L19.6313 3.00391L21.3676 3.99609Z" fill={color}/>
    </svg>
  );
};

export default DigitalScale;
