import React from 'react';

export interface ScanHumanProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ScanHuman: React.FC<ScanHumanProps> = ({
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
  <path fillRule="evenodd" clipRule="evenodd" d="M12 11.5C15.0939 11.5 18 13.5419 18 16.5C18 17.0523 17.5523 17.5 17 17.5H7C6.44772 17.5 6 17.0523 6 16.5C6 13.5419 8.90606 11.5 12 11.5ZM12 13.5C10.1297 13.5 8.76859 14.4134 8.24121 15.5H15.7588C15.2314 14.4134 13.8703 13.5 12 13.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5C13.6569 4.5 15 5.84315 15 7.5C15 9.15685 13.6569 10.5 12 10.5C10.3431 10.5 9 9.15685 9 7.5C9 5.84315 10.3431 4.5 12 4.5ZM12 6.5C11.4477 6.5 11 6.94772 11 7.5C11 8.05228 11.4477 8.5 12 8.5C12.5523 8.5 13 8.05228 13 7.5C13 6.94772 12.5523 6.5 12 6.5Z" fill={color}/>
  <path d="M7.5 5H3.5V9H1.5V4C1.5 3.73478 1.60543 3.4805 1.79297 3.29297C1.9805 3.10543 2.23479 3 2.5 3H7.5V5Z" fill={color}/>
  <path d="M21.5 3C22.0523 3 22.5 3.44772 22.5 4V9H20.5V5H16.5V3H21.5Z" fill={color}/>
    </svg>
  );
};

export default ScanHuman;
