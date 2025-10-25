import React from 'react';

export interface ReceiptCheckmarkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptCheckmark: React.FC<ReceiptCheckmarkProps> = ({
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
      <path d="M21.7588 3.65002L15.7588 10.65C15.5688 10.8717 15.2919 10.9996 15 10.9996C14.7081 10.9996 14.4312 10.8717 14.2412 10.65L11.2412 7.15002L12.7588 5.84924L15 8.4635L20.2412 2.34924L21.7588 3.65002Z" fill={color}/>
  <path d="M15.5 3.99963H6V19.9996H7V21.9996H5C4.44772 21.9996 4 21.5519 4 20.9996V2.99963C4.00019 2.44751 4.44783 1.99963 5 1.99963H15.5V3.99963Z" fill={color}/>
  <path d="M11 21.9996H9V19.9996H11V21.9996Z" fill={color}/>
  <path d="M15 21.9996H13V19.9996H15V21.9996Z" fill={color}/>
  <path d="M20 20.9996C20 21.5519 19.5523 21.9996 19 21.9996H17V19.9996H18V11.5H20V20.9996Z" fill={color}/>
    </svg>
  );
};

export default ReceiptCheckmark;
