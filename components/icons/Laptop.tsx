import React from 'react';

export interface LaptopProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Laptop: React.FC<LaptopProps> = ({
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
      <path d="M23 20H1V18H23V20Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19 4C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19ZM5 14H19V6H5V14Z" fill={color}/>
    </svg>
  );
};

export default Laptop;
