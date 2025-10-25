import React from 'react';

export interface PrintProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Print: React.FC<PrintProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M4 5.5C2.34315 5.5 1 6.84315 1 8.5V16C1 17.6569 2.34315 19 4 19H5.5V22C5.5 22.5523 5.94772 23 6.5 23H17.5C18.0523 23 18.5 22.5523 18.5 22V19H20C21.6051 19 22.9158 17.7394 22.9961 16.1543L23 16V8.5C23 6.84315 21.6569 5.5 20 5.5H4ZM16.5 21H7.5V15.5H16.5V21ZM20 7.5C20.5523 7.5 21 7.94772 21 8.5V16L20.9951 16.1025C20.9438 16.6067 20.5177 17 20 17H18.5V14.5C18.5 13.9477 18.0523 13.5 17.5 13.5H6.5C5.94772 13.5 5.5 13.9477 5.5 14.5V17H4C3.44772 17 3 16.5523 3 16V8.5C3 7.94772 3.44772 7.5 4 7.5H20Z" fill={color}/>
  <path d="M6.5 2V4H17.5V2H6.5Z" fill={color}/>
    </svg>
  );
};

export default Print;
