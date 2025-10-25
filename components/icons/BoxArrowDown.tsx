import React from 'react';

export interface BoxArrowDownProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BoxArrowDown: React.FC<BoxArrowDownProps> = ({
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
      <path d="M5 8H3V18H21V8H19V6H22C22.5523 6 23 6.44772 23 7V19C23 19.5523 22.5523 20 22 20H2C1.44772 20 1 19.5523 1 19V7C1 6.44772 1.44772 6 2 6H5V8Z" fill={color}/>
  <path d="M13 12.5859L15.793 9.79297L17.207 11.207L12.707 15.707C12.3165 16.0976 11.6835 16.0976 11.293 15.707L6.79297 11.207L8.20703 9.79297L11 12.5859V3.5H13V12.5859Z" fill={color}/>
    </svg>
  );
};

export default BoxArrowDown;
