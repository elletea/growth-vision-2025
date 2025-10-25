import React from 'react';

export interface EqualProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Equal: React.FC<EqualProps> = ({
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
      <path d="M21 17H3V15H21V17Z" fill={color}/>
  <path d="M21 9H3V7H21V9Z" fill={color}/>
    </svg>
  );
};

export default Equal;
