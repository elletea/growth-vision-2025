import React from 'react';

export interface MopedProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Moped: React.FC<MopedProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C13.8638 0 15.43 1.27477 15.874 3H19V5H15.874C15.616 6.00247 14.978 6.85113 14.124 7.3877C16.3892 8.24544 18 10.4343 18 13V19C18 19.5523 17.5523 20 17 20H15V21C15 22.6569 13.6569 24 12 24C10.3431 24 9 22.6569 9 21V20H7C6.44772 20 6 19.5523 6 19V13C6 10.4346 7.61023 8.24567 9.875 7.3877C9.02136 6.8511 8.38392 6.0022 8.12598 5H5V3H8.12598C8.57002 1.27477 10.1362 0 12 0ZM12 16C11.4477 16 11 16.4477 11 17V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V17C13 16.4477 12.5523 16 12 16ZM12 9C9.79086 9 8 10.7909 8 13V18H9V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V18H16V13C16 10.7909 14.2091 9 12 9ZM12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2Z" fill={color}/>
    </svg>
  );
};

export default Moped;
