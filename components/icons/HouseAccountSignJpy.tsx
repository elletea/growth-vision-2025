import React from 'react';

export interface HouseAccountSignJpyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HouseAccountSignJpy: React.FC<HouseAccountSignJpyProps> = ({
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
      <path d="M5.5 7H3.5V19H20.5V7H18.5V5H21.5C22.0523 5 22.5 5.44772 22.5 6V20C22.5 20.5523 22.0523 21 21.5 21H2.5C1.94772 21 1.5 20.5523 1.5 20V6C1.5 5.44772 1.94772 5 2.5 5H5.5V7Z" fill={color}/>
  <path d="M17.3223 3.56934L13.9092 8.5H17V10.5H13V12.5H17V14.5H13V17.5H11V14.5H7V12.5H11V10.5H7V8.5H10.0908L6.67773 3.56934L8.32227 2.43066L12 7.74219L15.6777 2.43066L17.3223 3.56934Z" fill={color}/>
    </svg>
  );
};

export default HouseAccountSignJpy;
