import React from 'react';

export interface CashMultipleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CashMultiple: React.FC<CashMultipleProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M23 8C23.5523 8 24 8.44772 24 9V20C23.9999 20.2651 23.8945 20.5195 23.707 20.707C23.5195 20.8945 23.2652 21 23 21H5C4.44778 21 4.0001 20.5522 4 20V9C4 8.73478 4.10543 8.48051 4.29297 8.29297C4.4805 8.10543 4.73478 8 5 8H23ZM6 19H7.23047C6.96535 18.5422 6.52484 18.2007 6 18.0654V19ZM9.46777 10C9.24209 11.8092 7.80923 13.2421 6 13.4678V16.0312C7.63913 16.2357 8.97033 17.4315 9.37402 19H18.5322C18.7579 17.1907 20.1907 15.7569 22 15.5312V12.9678C20.3609 12.7633 19.0297 11.5684 18.626 10H9.46777ZM22 17.5654C21.2977 17.7464 20.7464 18.2977 20.5654 19H22V17.5654ZM6 11.4336C6.70222 11.2525 7.2536 10.7023 7.43457 10H6V11.4336ZM20.7695 10C21.0346 10.4577 21.4753 10.7983 22 10.9336V10H20.7695Z" fill={color}/>
  <path d="M19 6H2V16H0V5C2.30417e-08 4.73478 0.105432 4.48051 0.292969 4.29297C0.480505 4.10543 0.734784 4 1 4H19V6Z" fill={color}/>
    </svg>
  );
};

export default CashMultiple;
