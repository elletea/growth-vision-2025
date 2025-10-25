import React from 'react';

export interface ScanCheckProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScanCheck: React.FC<ScanCheckProps> = ({
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
      <path d="M3.5 19H7.5V21H2.5L2.39746 20.9951C1.89333 20.9438 1.5 20.5177 1.5 20V15H3.5V19Z" fill={color}/>
  <path d="M22.5 20C22.5 20.5523 22.0523 21 21.5 21H16.5V19H20.5V15H22.5V20Z" fill={color}/>
  <path d="M17.2588 8.78516L11.2588 15.7852C11.0688 16.0065 10.7917 16.1338 10.5 16.1338C10.2083 16.1338 9.93118 16.0065 9.74121 15.7852L6.74121 12.2852L8.25879 10.9834L10.5 13.5977L15.7412 7.4834L17.2588 8.78516Z" fill={color}/>
  <path d="M7.5 5H3.5V9H1.5V4C1.5 3.73478 1.60543 3.4805 1.79297 3.29297C1.9805 3.10543 2.23479 3 2.5 3H7.5V5Z" fill={color}/>
  <path d="M21.5 3C22.0523 3 22.5 3.44772 22.5 4V9H20.5V5H16.5V3H21.5Z" fill={color}/>
    </svg>
  );
};

export default ScanCheck;
