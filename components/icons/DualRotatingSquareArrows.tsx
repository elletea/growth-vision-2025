import React from 'react';

export interface DualRotatingSquareArrowsProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DualRotatingSquareArrows: React.FC<DualRotatingSquareArrowsProps> = ({
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
      <path d="M10.207 14.707L7.41406 17.5H16C18.1603 17.4999 19.9746 15.8345 19.9746 14H21.9746C21.9746 17.1649 19.0247 19.4999 16 19.5H7.41406L10.207 22.293L8.79297 23.707L4.29297 19.207C3.90267 18.8165 3.90258 18.1834 4.29297 17.793L8.79297 13.293L10.207 14.707Z" fill={color}/>
  <path d="M4.5 15H1.5V12H4.5V15Z" fill={color}/>
  <path d="M22.5 12H19.5V9H22.5V12Z" fill={color}/>
  <path d="M19.707 4.79297C20.0974 5.18346 20.0974 5.81654 19.707 6.20703L15.207 10.707L13.793 9.29297L16.5859 6.5H8C5.83963 6.50014 4.0245 8.16512 4.02441 10H2.02441C2.0245 6.83469 4.97534 4.50014 8 4.5H16.5859L13.793 1.70703L15.207 0.292969L19.707 4.79297Z" fill={color}/>
    </svg>
  );
};

export default DualRotatingSquareArrows;
