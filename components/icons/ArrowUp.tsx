import React from 'react';

export interface ArrowUpProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ArrowUp: React.FC<ArrowUpProps> = ({
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
      <path d="M12 3.00049C12.2652 3.00049 12.5195 3.10592 12.707 3.29346L20.207 10.7935L18.793 12.2075L13 6.41455V20.0005H11V6.41455L5.20703 12.2075L3.79297 10.7935L11.293 3.29346L11.3662 3.22705C11.5442 3.08122 11.7679 3.00049 12 3.00049Z" fill={color}/>
    </svg>
  );
};

export default ArrowUp;
