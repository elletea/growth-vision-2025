import React from 'react';

export interface ScanProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Scan: React.FC<ScanProps> = ({
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
      <path d="M5 19H9V21H4C3.44772 21 3 20.5523 3 20V15H5V19Z" fill={color}/>
  <path d="M21 20C21 20.5523 20.5523 21 20 21H15V19H19V15H21V20Z" fill={color}/>
  <path d="M9 5H5V9H3V4C3 3.44772 3.44772 3 4 3H9V5Z" fill={color}/>
  <path d="M20 3C20.5523 3 21 3.44772 21 4V9H19V5H15V3H20Z" fill={color}/>
    </svg>
  );
};

export default Scan;
