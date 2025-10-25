import React from 'react';

export interface TimerProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Timer: React.FC<TimerProps> = ({
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
      <path d="M13 12H15.5V14H12C11.4477 14 11 13.5523 11 13V9H13V12Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12 4C14.247 4 16.3005 4.8266 17.877 6.1875L19.7725 4.29297L21.1875 5.70703L19.2383 7.6543C20.3438 9.14907 21 10.9983 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4ZM12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 11.1733 18.3014 9.51175 17.1553 8.26465C15.8745 6.87113 14.0397 6 12 6Z" fill={color}/>
  <path d="M15 3H9V1H15V3Z" fill={color}/>
    </svg>
  );
};

export default Timer;
