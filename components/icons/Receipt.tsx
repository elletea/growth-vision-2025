import React from 'react';

export interface ReceiptProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Receipt: React.FC<ReceiptProps> = ({
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
      <path d="M6.99976 3.99976H5.99976V19.9998H6.99976V21.9998H4.99976C4.44758 21.9996 3.99976 21.552 3.99976 20.9998V2.99976C3.99985 2.73469 4.1053 2.48017 4.29272 2.29272C4.4802 2.10531 4.73467 1.99982 4.99976 1.99976H6.99976V3.99976Z" fill={color}/>
  <path d="M10.9998 21.9998H8.99976V19.9998H10.9998V21.9998Z" fill={color}/>
  <path d="M14.9998 21.9998H12.9998V19.9998H14.9998V21.9998Z" fill={color}/>
  <path d="M18.9998 1.99976C19.2649 1.99975 19.5193 2.10533 19.7068 2.29272C19.8943 2.48023 19.9997 2.73459 19.9998 2.99976V20.9998C19.9998 21.552 19.552 21.9997 18.9998 21.9998H16.9998V19.9998H17.9998V3.99976H16.9998V1.99976H18.9998Z" fill={color}/>
  <path d="M15.9998 14.9998H7.99976V12.9998H15.9998V14.9998Z" fill={color}/>
  <path d="M15.9998 10.9998H7.99976V8.99976H15.9998V10.9998Z" fill={color}/>
  <path d="M10.9998 3.99976H8.99976V1.99976H10.9998V3.99976Z" fill={color}/>
  <path d="M14.9998 3.99976H12.9998V1.99976H14.9998V3.99976Z" fill={color}/>
    </svg>
  );
};

export default Receipt;
