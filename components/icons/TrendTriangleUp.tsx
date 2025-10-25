import React from 'react';

export interface TrendTriangleUpProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TrendTriangleUp: React.FC<TrendTriangleUpProps> = ({
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
      <path d="M10.3359 6.94333C11.1275 5.75587 12.8724 5.75587 13.6641 6.94333L18.927 14.8378C19.8131 16.1669 18.8603 17.9472 17.2629 17.9472H6.737C5.13961 17.9472 4.18683 16.1669 5.0729 14.8378L10.3359 6.94333Z" fill={color}/>
    </svg>
  );
};

export default TrendTriangleUp;
