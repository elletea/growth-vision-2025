import React from 'react';

export interface ArrowDownProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowDown: React.FC<ArrowDownProps> = ({
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
      <path d="M13 17.5864L18.793 11.7935L20.207 13.2075L12.707 20.7075C12.3166 21.0977 11.6834 21.0977 11.293 20.7075L3.79297 13.2075L5.20703 11.7935L11 17.5864V4.00049H13V17.5864Z" fill={color}/>
    </svg>
  );
};

export default ArrowDown;
