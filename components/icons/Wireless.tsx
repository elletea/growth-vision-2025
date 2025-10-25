import React from 'react';

export interface WirelessProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Wireless: React.FC<WirelessProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.22 3.5101L13.63 2.1001C19.09 7.5601 19.09 16.4401 13.63 21.8901L12.22 20.4801C16.9 15.8001 16.9 8.1901 12.22 3.5101ZM10.7999 4.93015L9.38989 6.34015C12.5099 9.46015 12.5099 14.5401 9.38989 17.6501L10.7999 19.0601C14.6999 15.1701 14.6999 8.83015 10.7999 4.93015ZM7.97006 16.2399C9.11006 15.1099 9.73006 13.5999 9.73006 11.9999C9.73006 10.3999 9.11006 8.88986 7.97006 7.75986L6.56006 9.16986C7.32006 9.92986 7.73006 10.9299 7.73006 11.9999C7.73006 13.0699 7.31006 14.0699 6.56006 14.8299L7.97006 16.2399Z" fill={color}/>
    </svg>
  );
};

export default Wireless;
