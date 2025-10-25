import React from 'react';

export interface DepositSignJpyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DepositSignJpy: React.FC<DepositSignJpyProps> = ({
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
      <path d="M3.5 19H20.5V16.5H22.5V20C22.5 20.5523 22.0523 21 21.5 21H2.5C1.94772 21 1.5 20.5523 1.5 20V16.5H3.5V19Z" fill={color}/>
  <path d="M17.3223 3.06934L13.9092 8H17V10H13V12H17V14H13V17H11V14H7V12H11V10H7V8H10.0908L6.67773 3.06934L8.32227 1.93066L12 7.24219L15.6777 1.93066L17.3223 3.06934Z" fill={color}/>
    </svg>
  );
};

export default DepositSignJpy;
