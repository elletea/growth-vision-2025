import React from 'react';

export interface TrendTriangleDownProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TrendTriangleDown: React.FC<TrendTriangleDownProps> = ({
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
      <path d="M10.3359 17.0567C11.1275 18.2441 12.8724 18.2441 13.6641 17.0567L18.927 9.16222C19.8131 7.83311 18.8603 6.05282 17.2629 6.05282H6.737C5.13961 6.05282 4.18683 7.83311 5.0729 9.16222L10.3359 17.0567Z" fill={color}/>
    </svg>
  );
};

export default TrendTriangleDown;
