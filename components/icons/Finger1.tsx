import React from 'react';

export interface Finger1Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Finger1: React.FC<Finger1Props> = ({
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
      <path d="M18 8C17.61 8 17.23 8.08 16.88 8.22C16.54 6.95 15.38 6 14 6C13.23 6 12.53 6.3 12 6.78C11.47 6.3 10.77 6 10 6C9.65 6 9.31 6.07 9 6.18V3C9 1.35 7.65 0 6 0C4.35 0 3 1.35 3 3V15C3 19.96 7.04 24 12 24C16.96 24 21 19.96 21 15V11C21 9.35 19.65 8 18 8ZM10 8C10.55 8 11 8.45 11 9V10H9V9C9 8.45 9.45 8 10 8ZM6 2C6.55 2 7 2.45 7 3V10H6C5.65 10 5.31 10.07 5 10.18V3C5 2.45 5.45 2 6 2ZM12 22C8.14 22 5 18.86 5 15V13C5 12.45 5.45 12 6 12H12C12.55 12 13 12.45 13 13C13 13.55 12.55 14 12 14H7V16C9.21 16 11 17.79 11 20H13C13 18.46 12.41 17.06 11.46 16H12C13.65 16 15 14.65 15 13C15 11.7 14.16 10.6 13 10.18V9C13 8.45 13.45 8 14 8C14.55 8 15 8.45 15 9V13C15 14.65 16.35 16 18 16C18.33 16 18.65 15.93 18.95 15.83C18.53 19.3 15.58 22 12 22ZM18 14C17.45 14 17 13.55 17 13V11C17 10.45 17.45 10 18 10C18.55 10 19 10.45 19 11V13C19 13.55 18.55 14 18 14Z" fill={color}/>
    </svg>
  );
};

export default Finger1;
