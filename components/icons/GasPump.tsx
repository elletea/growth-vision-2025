import React from 'react';

export interface GasPumpProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GasPump: React.FC<GasPumpProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 3C13.6046 3 14.5 3.89543 14.5 5V10.5H17C17.5523 10.5 18 10.9477 18 11.5V14.75C18 15.1642 18.3358 15.5 18.75 15.5C19.1642 15.5 19.5 15.1642 19.5 14.75V7.61816L18.0527 6.89453L18.9473 5.10547L20.9473 6.10547C21.286 6.27486 21.5 6.62123 21.5 7V14.75C21.5 16.2688 20.2688 17.5 18.75 17.5C17.2312 17.5 16 16.2688 16 14.75V12.5H14.5V19H21.5V21H3.5C2.94772 21 2.5 20.5523 2.5 20V5C2.5 3.89543 3.39543 3 4.5 3H12.5ZM4.5 19H12.5V5H4.5V19Z" fill={color}/>
    </svg>
  );
};

export default GasPump;
