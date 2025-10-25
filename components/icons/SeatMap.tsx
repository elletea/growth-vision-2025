import React from 'react';

export interface SeatMapProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SeatMap: React.FC<SeatMapProps> = ({
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
      <path d="M15 23H9V21H15V23Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M15 5C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9C5 6.79086 6.79086 5 9 5H15ZM9 7C7.89543 7 7 7.89543 7 9V15C7 16.1046 7.89543 17 9 17H15C16.1046 17 17 16.1046 17 15V9C17 7.89543 16.1046 7 15 7H9Z" fill={color}/>
  <path d="M3 15H1V9H3V15Z" fill={color}/>
  <path d="M23 15H21V9H23V15Z" fill={color}/>
  <path d="M15 3H9V1H15V3Z" fill={color}/>
    </svg>
  );
};

export default SeatMap;
