import React from 'react';

export interface CustomIconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CustomIcon: React.FC<CustomIconProps> = ({
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
      <path d="M8 6L12 2L16 6L12 10L8 6Z" fill={color}/>
  <path d="M2 12L6 8L10 12L6 16L2 12Z" fill={color}/>
  <path d="M14 12L18 8L22 12L18 16L14 12Z" fill={color}/>
  <path d="M8 18L12 14L16 18L12 22L8 18Z" fill={color}/>
    </svg>
  );
};

export default CustomIcon;
