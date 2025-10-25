import React from 'react';

export interface Finger3Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Finger3: React.FC<Finger3Props> = ({
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
      <path d="M18 8C17.65 8 17.31 8.07 17 8.18V5C17 3.35 15.65 2 14 2C13.61 2 13.23 2.08 12.88 2.22C12.54 0.95 11.38 0 10 0C8.62 0 7.46 0.95 7.12 2.22C6.77 2.08 6.39 2 6 2C4.35 2 3 3.35 3 5V15C3 19.96 7.04 24 12 24C16.96 24 21 19.96 21 15V13V11C21 9.35 19.65 8 18 8ZM9 3C9 2.45 9.45 2 10 2C10.55 2 11 2.45 11 3V5V7V10H9V5V3ZM6 4C6.55 4 7 4.45 7 5V10H6C5.65 10 5.31 10.07 5 10.18V5C5 4.45 5.45 4 6 4ZM12 22C8.14 22 5 18.86 5 15V13C5 12.45 5.45 12 6 12H12C12.55 12 13 12.45 13 13C13 13.55 12.55 14 12 14H7V16C9.21 16 11 17.79 11 20H13C13 18.46 12.41 17.06 11.46 16H12C13.65 16 15 14.65 15 13C15 11.7 14.16 10.6 13 10.18V7V5C13 4.45 13.45 4 14 4C14.55 4 15 4.45 15 5V11V13C15 14.65 16.35 16 18 16C18.33 16 18.65 15.93 18.95 15.83C18.53 19.3 15.58 22 12 22ZM18 14C17.45 14 17 13.55 17 13V11C17 10.45 17.45 10 18 10C18.55 10 19 10.45 19 11V13C19 13.55 18.55 14 18 14Z" fill={color}/>
    </svg>
  );
};

export default Finger3;
