import React from 'react';

export interface CalculatorProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Calculator: React.FC<CalculatorProps> = ({
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
      <path d="M10.7002 14.707L7.91406 17.4951L10.708 20.293L9.29297 21.7061L6.5 18.9111L3.70801 21.707L2.29297 20.293L5.08691 17.4951L2.30078 14.707L3.71582 13.293L6.5 16.0801L9.28516 13.293L10.7002 14.707Z" fill={color}/>
  <path d="M21.5 21H13.5V19H21.5V21Z" fill={color}/>
  <path d="M21.5 16H13.5V14H21.5V16Z" fill={color}/>
  <path d="M18.5049 5.49512H22V7.49512H18.5049V11H16.5049V7.49512H13V5.49512H16.5049V2H18.5049V5.49512Z" fill={color}/>
  <path d="M10.5 7.49512H2.5V5.49512H10.5V7.49512Z" fill={color}/>
    </svg>
  );
};

export default Calculator;
