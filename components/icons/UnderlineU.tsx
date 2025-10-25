import React from 'react';

export interface UnderlineUProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UnderlineU: React.FC<UnderlineUProps> = ({
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
      <path d="M18 21H6V19H18V21Z" fill={color}/>
  <path d="M8 11C8 13.2091 9.79086 15 12 15C14.2091 15 16 13.2091 16 11V3H18V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V3H8V11Z" fill={color}/>
    </svg>
  );
};

export default UnderlineU;
