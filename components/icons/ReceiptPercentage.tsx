import React from 'react';

export interface ReceiptPercentageProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptPercentage: React.FC<ReceiptPercentageProps> = ({
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
      <path d="M11 3.99963H6V19.9996H7V21.9996H5C4.44772 21.9996 4 21.5519 4 20.9996V2.99963C4.00019 2.44751 4.44783 1.99963 5 1.99963H11V3.99963Z" fill={color}/>
  <path d="M11 21.9996H9V19.9996H11V21.9996Z" fill={color}/>
  <path d="M15 21.9996H13V19.9996H15V21.9996Z" fill={color}/>
  <path d="M20 20.9996C20 21.5519 19.5523 21.9996 19 21.9996H17V19.9996H18V12.9996H20V20.9996Z" fill={color}/>
  <path d="M19 7.99963C19.8283 7.99963 20.4998 8.67137 20.5 9.49963C20.5 10.3281 19.8284 10.9996 19 10.9996C18.1716 10.9996 17.5 10.3281 17.5 9.49963C17.5002 8.67137 18.1717 7.99963 19 7.99963Z" fill={color}/>
  <path d="M21.207 3.20667L13.707 10.7067L12.293 9.2926L19.793 1.7926L21.207 3.20667Z" fill={color}/>
  <path d="M14.5 1.49963C15.3283 1.49963 15.9998 2.17137 16 2.99963C16 3.82806 15.3284 4.49963 14.5 4.49963C13.6716 4.49963 13 3.82806 13 2.99963C13.0002 2.17137 13.6717 1.49963 14.5 1.49963Z" fill={color}/>
    </svg>
  );
};

export default ReceiptPercentage;
