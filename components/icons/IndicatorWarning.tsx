import React from 'react';

export interface IndicatorWarningProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const IndicatorWarning: React.FC<IndicatorWarningProps> = ({
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
      <path d="M13 6.00024V13.5002H11V6.00024H13Z" fill={color}/>
  <path d="M12 18.5002C12.8284 18.5002 13.5 17.8287 13.5 17.0002C13.5 16.1718 12.8284 15.5002 12 15.5002C11.1716 15.5002 10.5 16.1718 10.5 17.0002C10.5 17.8287 11.1716 18.5002 12 18.5002Z" fill={color}/>
  <path fillRule="evenodd" clipRule="evenodd" d="M3.51472 3.51472C8.20101 -1.17157 15.7991 -1.17157 20.4854 3.51472C25.1717 8.20101 25.1717 15.7991 20.4854 20.4854C15.7991 25.1717 8.20101 25.1717 3.51472 20.4854C-1.17157 15.7991 -1.17157 8.20101 3.51472 3.51472ZM19.0714 4.92878C15.1661 1.02354 8.83402 1.02354 4.92878 4.92878C1.02354 8.83402 1.02354 15.1661 4.92878 19.0714C8.83402 22.9766 15.1661 22.9766 19.0714 19.0714C22.9766 15.1661 22.9766 8.83402 19.0714 4.92878Z" fill={color}/>
    </svg>
  );
};

export default IndicatorWarning;
