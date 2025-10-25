import React from 'react';

export interface PageHeaderProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PageHeader: React.FC<PageHeaderProps> = ({
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
      <path d="M5 18H19V12H21V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V12H5V18Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M19 3C20.1046 3 21 3.89543 21 5V9C21 9.55228 20.5523 10 20 10H4C3.44772 10 3 9.55228 3 9V5C3 3.89543 3.89543 3 5 3H19ZM5 8H19V5H5V8Z" fill={color}/>
    </svg>
  );
};

export default PageHeader;
