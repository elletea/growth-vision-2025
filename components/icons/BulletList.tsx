import React from 'react';

export interface BulletListProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BulletList: React.FC<BulletListProps> = ({
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
      <path d="M5 16C6.10457 16 7 16.8954 7 18C7 19.1046 6.10457 20 5 20C3.89543 20 3 19.1046 3 18C3 16.8954 3.89543 16 5 16Z" fill={color}/>
  <path d="M21 19H9V17H21V19Z" fill={color}/>
  <path d="M21 13H9V11H21V13Z" fill={color}/>
  <path d="M5 4C6.10457 4 7 4.89543 7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4Z" fill={color}/>
  <path d="M21 7H9V5H21V7Z" fill={color}/>
    </svg>
  );
};

export default BulletList;
