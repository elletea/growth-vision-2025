import React from 'react';

export interface CheckoutContinuousProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CheckoutContinuous: React.FC<CheckoutContinuousProps> = ({
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
      <path d="M10 19C10.5523 19 11 19.4477 11 20V22H9V21H5V22H3V20C3 19.4477 3.44772 19 4 19H10Z" fill={color}/>
  <path d="M20 19C20.5523 19 21 19.4477 21 20V22H19V21H15V22H13V20C13 19.4477 13.4477 19 14 19H20Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M10 8C10.5523 8 11 8.44772 11 9V15C11 15.5523 10.5523 16 10 16H4C3.73478 16 3.48051 15.8946 3.29297 15.707C3.10543 15.5195 3 15.2652 3 15V9C3 8.44772 3.44772 8 4 8H10ZM5 14H9V10H5V14Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M20 8C20.5523 8 21 8.44772 21 9V15C21 15.5523 20.5523 16 20 16H14C13.7348 16 13.4805 15.8946 13.293 15.707C13.1054 15.5195 13 15.2652 13 15V9C13 8.44772 13.4477 8 14 8H20ZM15 14H19V10H15V14Z" fill={color}/>
  <path d="M5 3H9V2H11V4C11 4.55228 10.5523 5 10 5H4C3.44772 5 3 4.55228 3 4V2H5V3Z" fill={color}/>
  <path d="M15 3H19V2H21V4C21 4.55228 20.5523 5 20 5H14C13.4477 5 13 4.55228 13 4V2H15V3Z" fill={color}/>
    </svg>
  );
};

export default CheckoutContinuous;
