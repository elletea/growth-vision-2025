import React from 'react';

export interface CalendarPlusProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CalendarPlus: React.FC<CalendarPlusProps> = ({
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
      <path d="M18 16H22V18H18V22H16V18H12V16H16V12H18V16Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V11H19V10H5V19H11V21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19ZM5 8H19V5H5V8Z" fill={color}/>
    </svg>
  );
};

export default CalendarPlus;
