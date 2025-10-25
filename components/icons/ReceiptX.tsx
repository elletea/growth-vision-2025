import React from 'react';

export interface ReceiptXProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptX: React.FC<ReceiptXProps> = ({
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
      <path d="M20.914 2.5L17.871 5.54297L20.914 8.58594L19.4999 10L16.4569 6.95703L13.414 10L11.9999 8.58594L15.0429 5.54297L11.9999 2.5L13.414 1.08594L16.4569 4.12891L19.4999 1.08594L20.914 2.5Z" fill={color}/>
  <path d="M10 3.99963H6V19.9996H7V21.9996H5C4.44772 21.9996 4 21.5519 4 20.9996V2.99963C4.00019 2.44751 4.44783 1.99963 5 1.99963H10V3.99963Z" fill={color}/>
  <path d="M11 21.9996H9V19.9996H11V21.9996Z" fill={color}/>
  <path d="M15 21.9996H13V19.9996H15V21.9996Z" fill={color}/>
  <path d="M20 20.9996C20 21.5519 19.5523 21.9996 19 21.9996H17V19.9996H18V11.9996H20V20.9996Z" fill={color}/>
    </svg>
  );
};

export default ReceiptX;
