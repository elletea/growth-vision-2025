import React from 'react';

export interface CashProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Cash: React.FC<CashProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M21.5 5C22.0523 5 22.5 5.44772 22.5 6V18C22.5 18.2651 22.3945 18.5195 22.207 18.707C22.0195 18.8945 21.7652 19 21.5 19H2.5C1.94778 19 1.5001 18.5522 1.5 18V6C1.5 5.73478 1.60543 5.48051 1.79297 5.29297C1.98051 5.10543 2.23478 5 2.5 5H21.5ZM3.5 17H4.93457C4.75358 16.2977 4.20233 15.7464 3.5 15.5654V17ZM6.96777 7C6.74209 8.80923 5.30923 10.2421 3.5 10.4678V13.5312C5.30929 13.7569 6.74209 15.1907 6.96777 17H17.0322C17.2579 15.1907 18.6907 13.7569 20.5 13.5312V10.4678C18.6908 10.2421 17.2579 8.80923 17.0322 7H6.96777ZM20.5 15.5654C19.7977 15.7464 19.2464 16.2977 19.0654 17H20.5V15.5654ZM19.0654 7C19.2464 7.70225 19.7978 8.25254 20.5 8.43359V7H19.0654ZM3.5 8.43359C4.20222 8.25254 4.7536 7.70225 4.93457 7H3.5V8.43359Z" fill={color}/>
    </svg>
  );
};

export default Cash;
