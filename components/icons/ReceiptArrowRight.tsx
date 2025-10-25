import React from 'react';

export interface ReceiptArrowRightProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptArrowRight: React.FC<ReceiptArrowRightProps> = ({
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
      <path d="M13 4H6V20H7V22H5C4.44784 22 4.0002 21.5521 4 21V3C4.00019 2.44788 4.44783 2 5 2H13V4Z" fill={color}/>
  <path d="M11 22H9V20H11V22Z" fill={color}/>
  <path d="M15 22H13V20H15V22Z" fill={color}/>
  <path d="M20 21C19.9998 21.5521 19.5522 22 19 22H17V20H18V13.5H20V21Z" fill={color}/>
  <path d="M21.207 6.29297C21.3946 6.4805 21.5 6.73479 21.5 7C21.5 7.26521 21.3946 7.5195 21.207 7.70703L16.707 12.207L15.293 10.793L18.0859 8H9V6H18.0859L15.293 3.20703L16.707 1.79297L21.207 6.29297Z" fill={color}/>
    </svg>
  );
};

export default ReceiptArrowRight;
