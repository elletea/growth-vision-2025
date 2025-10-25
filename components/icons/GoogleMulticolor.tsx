import React from 'react';

export interface GoogleMulticolorProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GoogleMulticolor: React.FC<GoogleMulticolorProps> = ({
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
      <path d="M20.64 12.2046C20.64 11.5664 20.5827 10.9527 20.4764 10.3636H12V13.8491H16.8437C16.6309 14.97 15.9927 15.9191 15.0355 16.5573V18.8237H17.9564C19.6582 17.2527 20.64 14.9455 20.64 12.2046Z" fill={color}/>
  <path d="M12 21C14.43 21 16.4673 20.1982 17.9564 18.8237L15.0355 16.5573C14.2336 17.0973 13.2109 17.4245 12 17.4245C9.66 17.4245 7.67182 15.8454 6.96 13.7182H3.96545V16.0418C5.44636 18.9791 8.48182 21 12 21Z" fill={color}/>
  <path d="M6.96 13.71C6.78 13.17 6.67364 12.5973 6.67364 12C6.67364 11.4027 6.78 10.83 6.96 10.29V7.96638H3.96546C3.35182 9.17729 3 10.5437 3 12C3 13.4564 3.35182 14.8227 3.96546 16.0337L6.29728 14.2173L6.96 13.71Z" fill={color}/>
  <path d="M12 6.58364C13.3255 6.58364 14.5036 7.04182 15.4446 7.92546L18.0218 5.34818C16.4591 3.89182 14.43 3 12 3C8.48182 3 5.44637 5.02092 3.96546 7.96638L6.96 10.29C7.67182 8.16274 9.66 6.58364 12 6.58364Z" fill={color}/>
    </svg>
  );
};

export default GoogleMulticolor;
