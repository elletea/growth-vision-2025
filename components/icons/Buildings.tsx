import React from 'react';

export interface BuildingsProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Buildings: React.FC<BuildingsProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M14 3C14.5523 3 15 3.44772 15 4V10H21C21.5523 10 22 10.4477 22 11V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H14ZM4 19H13V5H4V19ZM15 19H20V12H15V19Z" fill={color}/>
    </svg>
  );
};

export default Buildings;
