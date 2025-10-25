import React from 'react';

export interface SquareHandheldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SquareHandheld: React.FC<SquareHandheldProps> = ({
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
      <path d="M9 5C9.55228 5 10 5.44772 10 6C10 6.55228 9.55228 7 9 7C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M16.5 2C18.1569 2 19.5 3.34315 19.5 5V19C19.5 20.6569 18.1569 22 16.5 22H7.5C5.84315 22 4.5 20.6569 4.5 19V5C4.5 3.34315 5.84315 2 7.5 2H16.5ZM17.5 9.8252C17.1869 9.93604 16.8511 10 16.5 10H7.5C7.14888 10 6.81314 9.93604 6.5 9.8252V19C6.5 19.5523 6.94772 20 7.5 20H16.5C17.0523 20 17.5 19.5523 17.5 19V9.8252ZM7.5 4C6.94772 4 6.5 4.44772 6.5 5V7C6.5 7.55228 6.94772 8 7.5 8H16.5C17.0523 8 17.5 7.55228 17.5 7V5C17.5 4.44772 17.0523 4 16.5 4H7.5Z" fill={color}/>
    </svg>
  );
};

export default SquareHandheld;
