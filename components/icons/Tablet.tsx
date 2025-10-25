import React from 'react';

export interface TabletProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Tablet: React.FC<TabletProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M22 18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18L2 6C2 4.89543 2.89543 4 4 4L20 4C21.1046 4 22 4.89543 22 6V18ZM4 6L4 18L20 18V6L4 6Z" fill={color}/>
  <path d="M9 8L15 8V10L9 10L9 8Z" fill={color}/>
    </svg>
  );
};

export default Tablet;
