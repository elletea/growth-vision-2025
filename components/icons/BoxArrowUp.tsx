import React from 'react';

export interface BoxArrowUpProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BoxArrowUp: React.FC<BoxArrowUpProps> = ({
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
      <path d="M5 8.00025H3V18.0003H21V8.00025H19V6.00025H22C22.5523 6.00025 23 6.44797 23 7.00025V19.0003C22.9999 19.5524 22.5522 20.0003 22 20.0003H2C1.44779 20.0003 1.00013 19.5524 1 19.0003V7.00025C1 6.44797 1.44772 6.00025 2 6.00025H5V8.00025Z" fill={color}/>
  <path d="M11.3691 3.72486C11.7619 3.40452 12.3409 3.42711 12.707 3.79322L17.207 8.29322L15.793 9.70728L13 6.91431V16.0003H11V6.91431L8.20703 9.70728L6.79297 8.29322L11.293 3.79322L11.3691 3.72486Z" fill={color}/>
    </svg>
  );
};

export default BoxArrowUp;
