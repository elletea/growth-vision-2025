import React from 'react';

export interface WifiProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Wifi: React.FC<WifiProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M20.4901 10.51C18.2201 8.25 15.2101 7 12.0001 7C8.7901 7 5.7801 8.25 3.5101 10.51L2.1001 9.1C4.7401 6.46 8.2601 5 12.0001 5C15.7401 5 19.2601 6.46 21.9001 9.1L20.4901 10.51ZM4.92993 11.9299L6.33993 13.3399C9.45993 10.2199 14.5299 10.2199 17.6499 13.3399L19.0599 11.9299C15.1699 8.02991 8.82993 8.02991 4.92993 11.9299ZM12 13C13.6 13 15.11 13.63 16.24 14.76L14.83 16.17C13.32 14.66 10.68 14.66 9.17001 16.17L7.76001 14.76C8.89001 13.62 10.4 13 12 13ZM12.0001 18.9999L10.5901 17.5899C11.3701 16.8099 12.6301 16.8099 13.4101 17.5899L12.0001 18.9999Z" fill={color}/>
    </svg>
  );
};

export default Wifi;
