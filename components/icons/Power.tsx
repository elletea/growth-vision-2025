import React from 'react';

export interface PowerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Power: React.FC<PowerProps> = ({
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
      <path d="M13 3H11V12H13V3Z" fill={color}/>
  <path d="M5.13451 10.6344C5.4046 9.2765 6.07129 8.02922 7.05026 7.05025L5.63605 5.63604C4.37737 6.89471 3.5202 8.49836 3.17294 10.2442C2.82567 11.99 3.0039 13.7996 3.68509 15.4441C4.36628 17.0887 5.51983 18.4943 6.99987 19.4832C8.47991 20.4722 10.22 21 12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89471 18.364 5.63604L16.9498 7.05025C17.9287 8.02922 18.5954 9.2765 18.8655 10.6344C19.1356 11.9922 18.997 13.3997 18.4672 14.6788C17.9373 15.9579 17.0401 17.0511 15.889 17.8203C14.7379 18.5895 13.3845 19 12 19C10.6155 19 9.26216 18.5895 8.11101 17.8203C6.95987 17.0511 6.06266 15.9579 5.53285 14.6788C5.00303 13.3997 4.86441 11.9922 5.13451 10.6344Z" fill={color}/>
    </svg>
  );
};

export default Power;
