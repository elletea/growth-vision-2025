import React from 'react';

export interface ItalicsIProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ItalicsI: React.FC<ItalicsIProps> = ({
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
      <path d="M18 5H14.7803L11.2803 19H14V21H6V19H9.21973L12.7197 5H10V3H18V5Z" fill={color}/>
    </svg>
  );
};

export default ItalicsI;
