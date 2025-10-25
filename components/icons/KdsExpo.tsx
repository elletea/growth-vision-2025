import React from 'react';

export interface KdsExpoProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const KdsExpo: React.FC<KdsExpoProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10 15C10.5523 15 11 15.4477 11 16V20C11 20.5523 10.5523 21 10 21H3C2.44775 21 2 20.5523 2 20V16C2 15.4477 2.44775 15 3 15H10ZM4 19H9V17H4V19Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21.5523 12 22 12.4477 22 13V20C22 20.5523 21.5523 21 21 21H14C13.4478 21 13 20.5523 13 20V13C13 12.4477 13.4478 12 14 12H21ZM15 19H20V14H15V19Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M10 4C10.5523 4 11 4.44772 11 5V12C11 12.5523 10.5523 13 10 13H3C2.44776 13 2.00001 12.5523 2 12V5C2 4.44774 2.44775 4.00004 3 4H10ZM4 11H9V6H4V11Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21 4C21.5523 4 22 4.44772 22 5V9C22 9.55228 21.5523 10 21 10H14C13.4478 9.99996 13 9.55226 13 9V5C13 4.44774 13.4478 4.00004 14 4H21ZM15 8H20V6H15V8Z" fill={color}/>
    </svg>
  );
};

export default KdsExpo;
