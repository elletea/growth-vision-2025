import React from 'react';

export interface HamburgerLinesProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const HamburgerLines: React.FC<HamburgerLinesProps> = ({
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
      <path d="M20.5 20H3.5V18H20.5V20Z" fill={color}/>
  <path d="M20.5 13H3.5V11H20.5V13Z" fill={color}/>
  <path d="M20.5 6H3.5V4H20.5V6Z" fill={color}/>
    </svg>
  );
};

export default HamburgerLines;
