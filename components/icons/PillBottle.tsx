import React from 'react';

export interface PillBottleProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PillBottle: React.FC<PillBottleProps> = ({
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
      <path fillRule="evenodd" clipRule="evenodd" d="M12.519 3.62711C14.6879 1.45833 18.2046 1.45823 20.3735 3.62711C22.5421 5.79601 22.5422 9.31273 20.3735 11.4816L11.4819 20.3732C9.31301 22.5421 5.79632 22.5419 3.62737 20.3732C1.45844 18.2043 1.45844 14.6876 3.62737 12.5187L12.519 3.62711ZM5.04143 13.9338C3.65374 15.3216 3.65361 17.5713 5.04143 18.9591C6.42927 20.3467 8.679 20.3468 10.0668 18.9591L13.8061 15.2199L8.78069 10.1945L5.04143 13.9338ZM18.9594 5.04117C17.5716 3.6534 15.3219 3.65363 13.934 5.04117L10.1948 8.78043L15.2201 13.8058L18.9594 10.0666C20.3469 8.67873 20.3469 6.42896 18.9594 5.04117Z" fill={color}/>
    </svg>
  );
};

export default PillBottle;
