import React from 'react';

export interface ScanBarcodeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScanBarcode: React.FC<ScanBarcodeProps> = ({
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
      <path d="M3.5 19H7.5V21H2.5L2.39746 20.9951C1.89334 20.9438 1.5 20.5177 1.5 20V15H3.5V19Z" fill={color}/>
  <path d="M22.5 20C22.5 20.5523 22.0523 21 21.5 21H16.5V19H20.5V15H22.5V20Z" fill={color}/>
  <path d="M7.5 15.5H5.5V8.5H7.5V15.5Z" fill={color}/>
  <path d="M11 15.5H10V8.5H11V15.5Z" fill={color}/>
  <path d="M15 15.5H13V8.5H15V15.5Z" fill={color}/>
  <path d="M18.5 15.5H17.5V8.5H18.5V15.5Z" fill={color}/>
  <path d="M7.5 5H3.5V9H1.5V4C1.5 3.73478 1.60543 3.4805 1.79297 3.29297C1.9805 3.10543 2.23479 3 2.5 3H7.5V5Z" fill={color}/>
  <path d="M21.5 3C22.0523 3 22.5 3.44772 22.5 4V9H20.5V5H16.5V3H21.5Z" fill={color}/>
    </svg>
  );
};

export default ScanBarcode;
