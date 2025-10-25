import React from 'react';

export interface CalendarDateProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CalendarDate: React.FC<CalendarDateProps> = ({
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
      <path d="M15.5 14C16.3284 14 17 14.6716 17 15.5C17 16.3284 16.3284 17 15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19 3C20.1045 3.00013 21 3.89551 21 5V19C21 20.1045 20.1045 20.9999 19 21H5C3.89552 20.9999 3 20.1045 3 19V5C3 3.8955 3.89552 3.00011 5 3H19ZM5 19H19V10H5V19ZM5 8H19V5H5V8Z" fill={color}/>
    </svg>
  );
};

export default CalendarDate;
