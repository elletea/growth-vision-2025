import React from 'react';

export interface ColorKeySquare30Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ColorKeySquare30: React.FC<ColorKeySquare30Props> = ({
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
      <path d="M4 6.66667C4 5.19391 5.19391 4 6.66667 4H17.3333C18.8061 4 20 5.19391 20 6.66667V17.3333C20 18.8061 18.8061 20 17.3333 20H6.66667C5.19391 20 4 18.8061 4 17.3333V6.66667Z" fill={color}/>
    </svg>
  );
};

export default ColorKeySquare30;
