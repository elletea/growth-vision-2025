import React from 'react';

export interface FacebookProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Facebook: React.FC<FacebookProps> = ({
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
      <path d="M12 3C16.9705 3 21 7.04428 21 12.0331C21 16.6515 17.5465 20.4598 13.0908 21V14.7936H15.5255L16.0306 12.0331L13.0908 12.033V11.0568C13.0908 9.59811 13.661 9.03698 15.1367 9.03698C15.3085 9.03698 15.4678 9.03855 15.611 9.0417C15.7415 9.04457 15.8586 9.04875 15.9596 9.05423C16.0433 9.05878 16.1159 9.06423 16.176 9.07057V9.07057L16.1764 6.56842C16.1449 6.55967 16.1099 6.55092 16.0718 6.54221C15.6228 6.43927 14.7452 6.34403 14.2194 6.34403C11.2119 6.34403 9.82559 7.76908 9.82559 10.8436V12.033H7.96979V14.7936L9.82559 14.7936V20.8001C5.90574 19.8237 3 16.2691 3 12.0331C3 7.04428 7.02948 3 12 3Z" fill={color}/>
    </svg>
  );
};

export default Facebook;
