import React from 'react';

export interface BankProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Bank: React.FC<BankProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.225 2.69544L12.4477 2.73353L12.5844 2.77161C12.8987 2.87296 13.173 3.058 13.3891 3.19447L22.0346 8.65443C22.4107 8.89225 22.585 9.35092 22.4613 9.77845C22.3375 10.2059 21.9454 10.4999 21.5004 10.5001H20.0004V19.0001H22.0004V21.0001H2.0004V19.0001H4.0004V10.5001H2.5004C2.05533 10.5001 1.66336 10.2059 1.53946 9.77845C1.41572 9.35077 1.58981 8.89219 1.96622 8.65443L10.6117 3.19447C10.8587 3.0385 11.1811 2.81892 11.5531 2.73353C11.7736 2.68304 12.0013 2.67016 12.225 2.69544ZM6.0004 10.5001V19.0001H11.0004V10.5001H6.0004ZM13.0004 10.5001V19.0001H18.0004V10.5001H13.0004ZM11.9945 4.69251C11.9305 4.7275 11.8448 4.78084 11.6801 4.88489L5.95646 8.50013H18.0443L12.3207 4.88489C12.1561 4.78093 12.0703 4.72752 12.0063 4.69251C12.0043 4.69146 12.0022 4.68964 12.0004 4.68861C11.9986 4.68957 11.9965 4.69138 11.9945 4.69251Z" fill={color}/>
    </svg>
  );
};

export default Bank;
