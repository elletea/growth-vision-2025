import React from 'react';

export interface WifiSlashProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WifiSlash: React.FC<WifiSlashProps> = ({
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
      <path d="M9.87891 17.8792C11.0505 16.7076 12.9495 16.7076 14.1211 17.8792L12 20.0002L9.87891 17.8792Z" fill={color}/>
  <path d="M23.6035 3.7981L19.9619 6.55005C20.8933 7.17157 21.774 7.91255 22.585 8.77271L21.2129 10.2278C20.3073 9.26736 19.3016 8.47821 18.2314 7.85962L16.3203 9.30396C17.5683 9.87058 18.7382 10.6924 19.7568 11.7727L18.3848 13.2278C17.2352 12.0085 15.8521 11.1892 14.3887 10.7649L11.9512 12.6077C13.7512 12.5943 15.5553 13.316 16.9287 14.7727L15.5566 16.2278C13.5924 14.1444 10.4076 14.1444 8.44336 16.2278L7.91016 15.6624L3.10352 19.2981L1.89648 17.7024L11.5029 10.4377C9.36041 10.5622 7.25194 11.4918 5.61523 13.2278L4.24316 11.7727C6.89348 8.9616 10.562 7.89081 13.9893 8.55786L16.1748 6.90552C11.6302 5.2795 6.40741 6.38683 2.78613 10.2278L1.41504 8.77271C5.91647 3.99827 12.5704 2.90073 18.0625 5.47876L22.3965 2.20239L23.6035 3.7981Z" fill={color}/>
    </svg>
  );
};

export default WifiSlash;
