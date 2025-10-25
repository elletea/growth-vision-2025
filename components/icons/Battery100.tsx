import React from 'react';

export interface Battery100Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Battery100: React.FC<Battery100Props> = ({
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
      <path d="M16.5 15.5H4.5V8.5H16.5V15.5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M17 5C18.6569 5 20 6.34315 20 8V16C20 17.6569 18.6569 19 17 19H4C2.3949 19 1.08422 17.7394 1.00391 16.1543L1 16V8C1 6.34315 2.34315 5 4 5H17ZM4 7C3.44772 7 3 7.44772 3 8V16L3.00488 16.1025C3.05622 16.6067 3.48233 17 4 17H17C17.5523 17 18 16.5523 18 16V8C18 7.44772 17.5523 7 17 7H4Z" fill={color}/>
  <path d="M23.5 14.5H21.5V9.5H23.5V14.5Z" fill={color}/>
    </svg>
  );
};

export default Battery100;
