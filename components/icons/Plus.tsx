import React from 'react';

export interface PlusProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Plus: React.FC<PlusProps> = ({
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
      <path d="M13 11.0049H20V13.0049H13V20.0049H11V13.0049H4V11.0049H11V4.00488H13V11.0049Z" fill={color}/>
    </svg>
  );
};

export default Plus;
