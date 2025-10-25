import React from 'react';

export interface ColorKeySquare10Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ColorKeySquare10: React.FC<ColorKeySquare10Props> = ({
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
      <path d="M2 4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89543 14 2 13.1046 2 12V4Z" fill={color}/>
    </svg>
  );
};

export default ColorKeySquare10;
