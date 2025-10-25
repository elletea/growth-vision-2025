import React from 'react';

export interface BoxArrowProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BoxArrow: React.FC<BoxArrowProps> = ({
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
      <path d="M8 7H5V19H17V16H19V20C19 20.5523 18.5523 21 18 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H8V7Z" fill={color}/>
  <path d="M20 3C20.5523 3 21 3.44772 21 4V10.5H19V6.41406L12.207 13.207L10.793 11.793L17.5859 5H13.5V3H20Z" fill={color}/>
    </svg>
  );
};

export default BoxArrow;
