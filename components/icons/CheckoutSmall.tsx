import React from 'react';

export interface CheckoutSmallProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CheckoutSmall: React.FC<CheckoutSmallProps> = ({
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
      <path d="M11.0005 20.5005H2.99951V18.5005H11.0005V20.5005Z" fill={color}/>
  <path d="M21.0005 20.5005H13.0005V18.5005H21.0005V20.5005Z" fill={color}/>
  <path d="M11.0005 15.5005H2.99951V13.5005H11.0005V15.5005Z" fill={color}/>
  <path d="M21.0005 15.5005H13.0005V13.5005H21.0005V15.5005Z" fill={color}/>
  <path d="M11.0005 10.5005H2.99951V8.50049H11.0005V10.5005Z" fill={color}/>
  <path d="M21.0005 10.5005H13.0005V8.50049H21.0005V10.5005Z" fill={color}/>
  <path d="M11.0005 5.50049H2.99951V3.50049H11.0005V5.50049Z" fill={color}/>
  <path d="M21.0005 5.50049H13.0005V3.50049H21.0005V5.50049Z" fill={color}/>
    </svg>
  );
};

export default CheckoutSmall;
