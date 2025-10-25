import React from 'react';

export interface ChartBarProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ChartBar: React.FC<ChartBarProps> = ({
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
      <path d="M5.5 19H3.5V6H5.5V19Z" fill={color}/>
  <path d="M10.5 19H8.5V2H10.5V19Z" fill={color}/>
  <path d="M15.5 19H13.5V9H15.5V19Z" fill={color}/>
  <path d="M20.5 19H18.5V7H20.5V19Z" fill={color}/>
    </svg>
  );
};

export default ChartBar;
