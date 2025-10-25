import React from 'react';

export interface CycleForwardProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CycleForward: React.FC<CycleForwardProps> = ({
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
      <path d="M21.2074 7.29297C21.5977 7.68345 21.5977 8.31656 21.2074 8.70703L16.7074 13.207L15.2933 11.793L18.0863 9H9.50037C7.01508 9.00002 5.00037 11.0147 5.00037 13.5C5.00038 15.9853 7.01509 18 9.50037 18H13.0004V20H9.50037C5.91052 20 3.00038 17.0898 3.00037 13.5C3.00037 9.91014 5.91051 7.00002 9.50037 7H18.0863L15.2933 4.20703L16.7074 2.79297L21.2074 7.29297Z" fill={color}/>
    </svg>
  );
};

export default CycleForward;
