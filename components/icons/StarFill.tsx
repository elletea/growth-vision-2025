import React from 'react';

export interface StarFillProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StarFill: React.FC<StarFillProps> = ({
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
      <path d="M10.9881 1.89137C11.3596 1.00089 12.6401 1.0009 13.0115 1.89137L13.0457 1.98317L15.1961 8.60035H22.1541C23.2193 8.60073 23.6623 9.96427 22.8006 10.5906L17.1707 14.6795L19.3211 21.2976C19.65 22.3109 18.4907 23.1533 17.6287 22.5271L11.9998 18.4373L6.3709 22.5271C5.50898 23.1529 4.3498 22.3107 4.67852 21.2976L6.82793 14.6795L1.19903 10.5906C0.337552 9.96428 0.78058 8.60097 1.84551 8.60035H8.80352L10.9539 1.98317L10.9881 1.89137Z" fill={color}/>
    </svg>
  );
};

export default StarFill;
