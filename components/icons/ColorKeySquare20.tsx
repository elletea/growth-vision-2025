import React from 'react';

export interface ColorKeySquare20Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ColorKeySquare20: React.FC<ColorKeySquare20Props> = ({
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
      <path d="M5 7.33333C5 6.04467 6.04467 5 7.33333 5H16.6667C17.9553 5 19 6.04467 19 7.33333V16.6667C19 17.9553 17.9553 19 16.6667 19H7.33333C6.04467 19 5 17.9553 5 16.6667V7.33333Z" fill={color}/>
    </svg>
  );
};

export default ColorKeySquare20;
