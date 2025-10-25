import React from 'react';

export interface BatteryExclamationProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BatteryExclamation: React.FC<BatteryExclamationProps> = ({
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
      <path d="M7 7H4C3.44772 7 3 7.44772 3 8V16L3.00488 16.1025C3.05622 16.6067 3.48233 17 4 17H7V19H4C2.3949 19 1.08422 17.7394 1.00391 16.1543L1 16V8C1 6.34315 2.34315 5 4 5H7V7Z" fill={color}/>
  <path d="M17 5C18.6569 5 20 6.34315 20 8V16C20 17.6569 18.6569 19 17 19H14V17H17C17.5523 17 18 16.5523 18 16V8C18 7.44772 17.5523 7 17 7H14V5H17Z" fill={color}/>
  <path d="M10.5 15C11.3284 15 12 15.6716 12 16.5C12 17.3284 11.3284 18 10.5 18C9.67157 18 9 17.3284 9 16.5C9 15.6716 9.67157 15 10.5 15Z" fill={color}/>
  <path d="M23.5 14.5H21.5V9.5H23.5V14.5Z" fill={color}/>
  <path d="M11.5 13H9.5V6H11.5V13Z" fill={color}/>
    </svg>
  );
};

export default BatteryExclamation;
