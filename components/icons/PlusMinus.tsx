import React from 'react';

export interface PlusMinusProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PlusMinus: React.FC<PlusMinusProps> = ({
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
      <path d="M18 20H6V18H18V20Z" fill={color}/>
  <path d="M13 8H18V10H13V15H11V10H6V8H11V3H13V8Z" fill={color}/>
    </svg>
  );
};

export default PlusMinus;
