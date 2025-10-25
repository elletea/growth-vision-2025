import React from 'react';

export interface FolderHumanProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FolderHuman: React.FC<FolderHumanProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15 16C18.0939 16 21 18.0419 21 21C21 21.5523 20.5523 22 20 22H10C9.44772 22 9 21.5523 9 21C9 18.0419 11.9061 16 15 16ZM15 18C13.1297 18 11.7686 18.9134 11.2412 20H18.7588C18.2314 18.9134 16.8703 18 15 18Z" fill={color}/>
  <path d="M10 2.5C10.3038 2.5 10.5915 2.63778 10.7812 2.875L12.4814 5H21L21.1025 5.00488C21.6067 5.05621 22 5.48232 22 6V16.5H20V7H12C11.6962 7 11.4085 6.86222 11.2188 6.625L9.51855 4.5H4V16.5H7.5V18.5H3C2.44772 18.5 2 18.0523 2 17.5V3.5C2 2.94772 2.44772 2.5 3 2.5H10Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11Z" fill={color}/>
    </svg>
  );
};

export default FolderHuman;
