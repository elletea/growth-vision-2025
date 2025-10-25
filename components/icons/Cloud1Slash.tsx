import React from 'react';

export interface Cloud1SlashProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Cloud1Slash: React.FC<Cloud1SlashProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M21.207 4.20703L19.1895 6.22363C21.9599 6.96753 24 9.49469 24 12.5C24 16.0899 21.0899 19 17.5 19H6.41406L3.5 21.9141L2.08594 20.5L3.74414 18.8408C1.5906 18.2837 0 16.3277 0 14C0 11.2386 2.23858 9 5 9C5.00782 9 5.01563 8.99996 5.02344 9C5.27609 6.19679 7.63101 4 10.5 4C12.6893 4 14.5711 5.28161 15.4561 7.12891L19.793 2.79297L21.207 4.20703ZM8.41406 17H17.5C19.9853 17 22 14.9853 22 12.5C22 10.0147 19.9853 8 17.5 8H17.4141L8.41406 17ZM10.5 6C8.567 6 7 7.567 7 9.5C7 9.66683 7.01267 9.83297 7.03613 9.99805C7.08339 10.3308 6.95983 10.665 6.70801 10.8877C6.45623 11.1103 6.10958 11.1921 5.78516 11.1045C5.53503 11.0369 5.27203 11 5 11C3.34315 11 2 12.3431 2 14C2 15.6569 3.34315 17 5 17H5.58594L13.9541 8.63086L13.7578 8.2168C13.7502 8.20089 13.743 8.18426 13.7363 8.16797C13.2111 6.89371 11.959 6 10.5 6Z" fill={color}/>
    </svg>
  );
};

export default Cloud1Slash;
