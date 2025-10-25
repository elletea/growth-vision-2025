import React from 'react';

export interface ArrowUpLinesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowUpLines: React.FC<ArrowUpLinesProps> = ({
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
      <path d="M7.5 7.41406L10.293 10.207L11.707 8.79297L7.20703 4.29297C7.0195 4.10543 6.76521 4 6.5 4C6.23479 4 5.9805 4.10543 5.79297 4.29297L1.29297 8.79297L2.70703 10.207L5.5 7.41406V19H7.5V7.41406Z" fill={color}/>
  <path d="M22 7H14V9H22V7Z" fill={color}/>
  <path d="M22 12H10V14H22V12Z" fill={color}/>
  <path d="M22 17H10V19H22V17Z" fill={color}/>
    </svg>
  );
};

export default ArrowUpLines;
