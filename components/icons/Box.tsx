import React from 'react';

export interface BoxProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Box: React.FC<BoxProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M21.1025 3.00488C21.6067 3.05621 22 3.48232 22 4V8C22 8.55228 21.5523 9 21 9H20.5V20.5C20.5 21.0523 20.0523 21.5 19.5 21.5H4.5C3.94772 21.5 3.5 21.0523 3.5 20.5V9H3C2.44772 9 2 8.55228 2 8V4C2 3.44772 2.44772 3 3 3H21L21.1025 3.00488ZM5.5 19.5H18.5V9H5.5V19.5ZM4 7H20V5H4V7Z" fill={color}/>
    </svg>
  );
};

export default Box;
