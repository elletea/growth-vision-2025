import React from 'react';

export interface ReceiptMultipleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptMultiple: React.FC<ReceiptMultipleProps> = ({
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
      <path d="M21 5.5C21.5523 5.5 22 5.94772 22 6.5V21.5C22 22.0523 21.5523 22.5 21 22.5H19V20.5H20V7.5H8V20.5H9V22.5H7C6.44772 22.5 6 22.0523 6 21.5V6.5C6 5.94772 6.44772 5.5 7 5.5H21Z" fill={color}/>
  <path d="M13 22.5H11V20.5H13V22.5Z" fill={color}/>
  <path d="M17 22.5H15V20.5H17V22.5Z" fill={color}/>
  <path d="M17 3.5H4V17.5H2V2.5C2 1.94772 2.44772 1.5 3 1.5H17V3.5Z" fill={color}/>
    </svg>
  );
};

export default ReceiptMultiple;
