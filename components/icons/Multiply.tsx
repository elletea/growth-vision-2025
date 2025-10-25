import React from 'react';

export interface MultiplyProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Multiply: React.FC<MultiplyProps> = ({
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
      <path d="M19.7069 5.70703L13.4139 12L19.7069 18.293L18.2928 19.707L11.9999 13.4141L5.70691 19.707L4.29285 18.293L10.5858 12L4.29285 5.70703L5.70691 4.29297L11.9999 10.5859L18.2928 4.29297L19.7069 5.70703Z" fill={color}/>
    </svg>
  );
};

export default Multiply;
