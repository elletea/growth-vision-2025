import React from 'react';

export interface DrawerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Drawer: React.FC<DrawerProps> = ({
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
      <path d="M11 13H5V11H11V13Z" fill={color}/>
  <path d="M19 13H13V11H19V13Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21 5C22.1046 5 23 5.89543 23 7V17C23 18.1046 22.1046 19 21 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5H21ZM3 17H21V7H3V17Z" fill={color}/>
    </svg>
  );
};

export default Drawer;
