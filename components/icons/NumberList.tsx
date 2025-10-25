import React from 'react';

export interface NumberListProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const NumberList: React.FC<NumberListProps> = ({
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
      <path d="M5.18262 14.5088C5.66508 14.5504 6.08283 14.7366 6.39258 15.0508C6.7479 15.4113 6.93848 15.9177 6.93848 16.4922C6.93829 17.5969 6.16089 18.3251 5.48438 18.9043L5.30566 19.0576H7V20.5H3V19.2783L4.33398 18.0938C4.67468 17.7931 4.97237 17.5304 5.1875 17.2656C5.40071 17.0032 5.50097 16.7758 5.50098 16.5508C5.50096 16.3409 5.44119 16.1862 5.35547 16.0869C5.29274 16.0143 5.20394 15.9567 5.08301 15.9326C5.04297 15.9246 4.99941 15.9199 4.95215 15.9199C4.91053 15.9199 4.8702 15.9244 4.83203 15.9326C4.56575 15.9901 4.38965 16.2404 4.38965 16.5732C4.38967 16.7072 4.41093 16.8413 4.4541 16.9697L4.59277 17.3828H3.1709L3.10449 17.1758C3.02623 16.9304 3.00001 16.756 3 16.5215C3 15.4048 3.79915 14.6053 4.77539 14.5098C4.84037 14.5034 4.90629 14.5 4.97266 14.5L5.18262 14.5088Z" fill={color}/>
  <path d="M21 19H9V17H21V19Z" fill={color}/>
  <path d="M21 13H9V11H21V13Z" fill={color}/>
  <path d="M5.81543 7.58398H7V9H3V7.58398H4.3418V5.29492H3.02832V4.00684L3.82227 3.93848H3.82422C4.1297 3.91367 4.28042 3.85428 4.36328 3.7793C4.4365 3.71278 4.50607 3.58702 4.52832 3.28613L4.5498 3H5.81543V7.58398Z" fill={color}/>
  <path d="M21 7H9V5H21V7Z" fill={color}/>
    </svg>
  );
};

export default NumberList;
