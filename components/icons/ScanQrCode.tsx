import React from 'react';

export interface ScanQrCodeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScanQrCode: React.FC<ScanQrCodeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M11 12C11.5523 12 12 12.4477 12 13V20C12 20.2652 11.8946 20.5195 11.707 20.707C11.5195 20.8946 11.2652 21 11 21H4C3.73478 21 3.4805 20.8946 3.29297 20.707C3.10543 20.5195 3 20.2652 3 20V13C3 12.7348 3.10543 12.4805 3.29297 12.293C3.4805 12.1054 3.73479 12 4 12H11ZM5 19H10V14H5V19Z" fill={color}/>
  <path d="M21 20C21 20.5523 20.5523 21 20 21H15V19H19V15H21V20Z" fill={color}/>
  <path d="M15.5 12C16.3284 12 17 12.6716 17 13.5C17 14.3284 16.3284 15 15.5 15C14.6716 15 14 14.3284 14 13.5C14 12.6716 14.6716 12 15.5 12Z" fill={color}/>
  <path d="M10.5 7C11.3284 7 12 7.67157 12 8.5C12 9.32843 11.3284 10 10.5 10C9.67157 10 9 9.32843 9 8.5C9 7.67157 9.67157 7 10.5 7Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M20 3C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10H15C14.7348 10 14.4805 9.89457 14.293 9.70703C14.1054 9.5195 14 9.26522 14 9V4C14 3.73479 14.1054 3.4805 14.293 3.29297C14.4805 3.10543 14.7348 3 15 3H20ZM16 8H19V5H16V8Z" fill={color}/>
  <path d="M9 5H5V9H3V4C3 3.44772 3.44772 3 4 3H9V5Z" fill={color}/>
    </svg>
  );
};

export default ScanQrCode;
