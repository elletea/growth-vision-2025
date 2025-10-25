import React from 'react';

export interface Cloud1Props {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Cloud1: React.FC<Cloud1Props> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M10.5 4C12.417 4 14.0993 4.98268 15.083 6.4668C15.8315 6.16707 16.647 6 17.5 6C21.0899 6 24 8.91015 24 12.5C24 16.0899 21.0899 19 17.5 19H5C2.23858 19 0 16.7614 0 14C0 11.2386 2.23858 9 5 9C5.00782 9 5.01563 8.99996 5.02344 9C5.27609 6.19679 7.63101 4 10.5 4ZM10.5 6C8.567 6 7 7.567 7 9.5C7 9.66683 7.01267 9.83297 7.03613 9.99805C7.08339 10.3308 6.95983 10.665 6.70801 10.8877C6.45623 11.1103 6.10958 11.1921 5.78516 11.1045C5.53503 11.0369 5.27203 11 5 11C3.34315 11 2 12.3431 2 14C2 15.6569 3.34315 17 5 17H17.5C19.9853 17 22 14.9853 22 12.5C22 10.0147 19.9853 8 17.5 8C16.648 8 15.8542 8.23521 15.1777 8.64355C14.9281 8.79415 14.6246 8.82858 14.3477 8.7373C14.0707 8.64595 13.8474 8.43758 13.7363 8.16797C13.2111 6.89371 11.959 6 10.5 6Z" fill={color}/>
    </svg>
  );
};

export default Cloud1;
