import React from 'react';

export interface ArrowDownLinesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowDownLines: React.FC<ArrowDownLinesProps> = ({
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
      <path d="M7.5 16.5859L10.293 13.793L11.707 15.207L7.20703 19.707C7.0195 19.8946 6.76521 20 6.5 20C6.23479 20 5.9805 19.8946 5.79297 19.707L1.29297 15.207L2.70703 13.793L5.5 16.5859V5H7.5V16.5859Z" fill={color}/>
  <path d="M22 17H14V15H22V17Z" fill={color}/>
  <path d="M22 12H10V10H22V12Z" fill={color}/>
  <path d="M22 7H10V5H22V7Z" fill={color}/>
    </svg>
  );
};

export default ArrowDownLines;
