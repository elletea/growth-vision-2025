import React from 'react';

export interface ReceiptPrinterProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptPrinter: React.FC<ReceiptPrinterProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C16.5523 2 17 2.44772 17 3V5.5H21.5C22.0523 5.5 22.5 5.94772 22.5 6.5V19.5C22.5 20.0523 22.0523 20.5 21.5 20.5H2.5C1.94772 20.5 1.5 20.0523 1.5 19.5V6.5C1.5 5.94772 1.94772 5.5 2.5 5.5H7V3C7 2.44772 7.44772 2 8 2H16ZM3.5 7.5V18.5H20.5V7.5H17V10H18.5V12H5.5V10H7V7.5H3.5ZM9 10H15V4H9V10Z" fill={color}/>
    </svg>
  );
};

export default ReceiptPrinter;
