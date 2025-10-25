import React from 'react';

export interface DumbbellProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Dumbbell: React.FC<DumbbellProps> = ({
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
      <path d="M8 11H16V4H18V20H16V13H8V20H6V4H8V11Z" fill={color}/>
  <path d="M4 18H2V13H1V11H2V6H4V18Z" fill={color}/>
  <path d="M22 11H23V13H22V18H20V6H22V11Z" fill={color}/>
    </svg>
  );
};

export default Dumbbell;
