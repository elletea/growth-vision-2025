import React from 'react';

export interface ReceiptHumanProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptHuman: React.FC<ReceiptHumanProps> = ({
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
      <path d="M11 4H6V20H7V22H5C4.44784 22 4.0002 21.5521 4 21V3C4.00019 2.44788 4.44783 2 5 2H11V4Z" fill={color}/>
  <path d="M11 22H9V20H11V22Z" fill={color}/>
  <path d="M15 22H13V20H15V22Z" fill={color}/>
  <path d="M20 21C19.9998 21.5521 19.5522 22 19 22H17V20H18V16H20V21Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M16 8C19.0939 8 22 10.0419 22 13C22 13.5523 21.5523 14 21 14H11C10.4477 14 10 13.5523 10 13C10 10.0419 12.9061 8 16 8ZM16 10C14.1297 10 12.7686 10.9134 12.2412 12H19.7588C19.2314 10.9134 17.8703 10 16 10Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M16 1C17.6569 1 19 2.34315 19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5C16.5523 5 17 4.55228 17 4C17 3.44772 16.5523 3 16 3Z" fill={color}/>
    </svg>
  );
};

export default ReceiptHuman;
