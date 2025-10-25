import React from 'react';

export interface ShoppingCartArrowProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ShoppingCartArrow: React.FC<ShoppingCartArrowProps> = ({
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
      <path d="M7.5 19C8.32843 19 9 19.6716 9 20.5C9 21.3284 8.32843 22 7.5 22C6.67157 22 6 21.3284 6 20.5C6 19.6716 6.67157 19 7.5 19Z" fill={color}/>
  <path d="M18.5 19C19.3284 19 20 19.6716 20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19Z" fill={color}/>
  <path d="M3 3C3.43033 3 3.81204 3.27541 3.94824 3.68359L4.7207 6H9V8H5.34375L7.74414 16H18.2559L19.167 12.9629L21.083 13.5371L19.958 17.2871C19.8311 17.7101 19.4416 18 19 18H7C6.55839 18 6.16889 17.7101 6.04199 17.2871L3.04199 7.28711L2.2793 5H0.5V3H3Z" fill={color}/>
  <path d="M23.207 6.29297C23.3946 6.4805 23.5 6.73479 23.5 7C23.5 7.23209 23.4193 7.45583 23.2734 7.63379L23.207 7.70703L18.707 12.207L17.293 10.793L20.0859 8H11V6H20.0859L17.293 3.20703L18.707 1.79297L23.207 6.29297Z" fill={color}/>
    </svg>
  );
};

export default ShoppingCartArrow;
