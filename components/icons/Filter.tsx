import React from 'react';

export interface FilterProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Filter: React.FC<FilterProps> = ({
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
      <path d="M15.5 19H8.5V17H15.5V19Z" fill={color}/>
  <path d="M19 13H5V11H19V13Z" fill={color}/>
  <path d="M22.5 7H1.5V5H22.5V7Z" fill={color}/>
    </svg>
  );
};

export default Filter;
