import React from 'react';

export interface SlidersHorizontalProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SlidersHorizontal: React.FC<SlidersHorizontalProps> = ({
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
      <path d="M19 16H22V18H19V21H17V13H19V16Z" fill={color}/>
  <path d="M15 18H2V16H15V18Z" fill={color}/>
  <path d="M11 6H22V8H11V11H9V3H11V6Z" fill={color}/>
  <path d="M7 8H2V6H7V8Z" fill={color}/>
    </svg>
  );
};

export default SlidersHorizontal;
