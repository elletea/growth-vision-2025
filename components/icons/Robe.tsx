import React from 'react';

export interface RobeProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Robe: React.FC<RobeProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.5801 2.5C17.5386 2.50024 18.8351 4.27545 18.542 6.00098C20.7318 6.0235 22.5 7.80488 22.5 10V18C22.5 20.2091 20.7091 22 18.5 22H5.5C3.29086 22 1.5 20.2091 1.5 18V10C1.5 7.79086 3.29086 6 5.5 6H5.61719C5.32721 4.28046 6.61451 2.50014 8.58008 2.5H15.5801ZM5.5 8C4.39543 8 3.5 8.89543 3.5 10V18C3.5 19.1046 4.39543 20 5.5 20H6.47949L11.0078 13.5293L6.72266 8H5.5ZM13.0596 14.0869L8.9209 20H18.5C19.6046 20 20.5 19.1046 20.5 18V10C20.5 8.89543 19.6046 8 18.5 8H17.4727L13.0596 14.0869ZM8.58008 4.5C7.74892 4.50018 7.28095 5.45526 7.79004 6.1123L12.2227 11.833L16.3896 6.08691C16.8686 5.42591 16.3963 4.5003 15.5801 4.5H8.58008Z" fill={color}/>
    </svg>
  );
};

export default Robe;
